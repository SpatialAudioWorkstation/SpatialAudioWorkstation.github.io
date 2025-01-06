import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = () => {
    const emailRef = useRef()
    const errRef = useRef()
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    // if email or password fields are changed reset error message
    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])

    const handleSubmit = async (e) => {
        // is a form so prevents reloading
        e.preventDefault()

        try {
            const userData = await login({ email, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, email }))
            setEmail('')
            setPwd('')
            navigate('/welcome')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // forces a screenreader to read the error
            errRef.current.focus();
        }
    }

    const handleEmailInput = (e) => setEmail(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Employee Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    value={email}
                    onChange={handleEmailInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )

    return content
}
export default Login