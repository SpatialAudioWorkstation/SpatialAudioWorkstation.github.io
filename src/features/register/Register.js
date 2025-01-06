import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCredentials } from '../auth/authSlice';
import { useRegisterMutation } from "./registerApiSlice";
import { useLoginMutation } from '../auth/authApiSlice';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [matchPwd, setMatchPwd] = useState('');
    const [promotionsOptIn, setPromotionsOptIn] = useState(false);
    const [debugOptIn, setDebugOptIn] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
    const [login, { isLoading: isLoginLoading }] = useLoginMutation();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, birthday, email, pwd, matchPwd, promotionsOptIn, debugOptIn]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await register({ firstName, lastName, birthday, email, pwd, promotionsOptIn, debugOptIn }).unwrap();
            console.log(JSON.stringify(response));
            setSuccess(true);
            setFirstName('');
            setLastName('');
            setBirthday('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
            setPromotionsOptIn(false);
            setDebugOptIn(false);
            const userData = await login({ user: email, pwd }).unwrap();
            dispatch(setCredentials({ ...userData, user: email }));
            navigate('/welcome');
        } catch (err) {
            if (!err?.originalStatus) {
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 409) {
                setErrMsg('Email Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    };

    const today = new Date().toISOString().split('T')[0];

    const content = (isRegisterLoading || isLoginLoading) ? <h1>Loading...</h1> : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />

                <label htmlFor="birthday">Birthday:</label>
                <input
                    type="date"
                    id="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                    max={today}
                />

                <label htmlFor="email">
                    Email: <span className="required">*</span>
                    <FontAwesomeIcon icon={faCheck} className={EMAIL_REGEX.test(email) ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={EMAIL_REGEX.test(email) || !email ? "hide" : "invalid"} />
                </label>
                <input
                    type="email"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    aria-invalid={EMAIL_REGEX.test(email) ? "false" : "true"}
                    aria-describedby="emailnote"
                />
                <p id="emailnote" className={email && !EMAIL_REGEX.test(email) ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must be a valid email address.
                </p>

                <label htmlFor="password">
                    Password: <span className="required">*</span>
                    <FontAwesomeIcon icon={faCheck} className={PWD_REGEX.test(pwd) ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={PWD_REGEX.test(pwd) || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={PWD_REGEX.test(pwd) ? "false" : "true"}
                    aria-describedby="pwdnote"
                />
                <p id="pwdnote" className={pwd && !PWD_REGEX.test(pwd) ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: ! @ # $ %
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm Password: <span className="required">*</span>
                    <FontAwesomeIcon icon={faCheck} className={pwd === matchPwd && matchPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={pwd === matchPwd || !matchPwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={pwd === matchPwd ? "false" : "true"}
                    aria-describedby="confirmnote"
                />
                <p id="confirmnote" className={matchPwd && pwd !== matchPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>

                <div className="email-preferences">
                    <p>Email Preferences:</p>
                    <p>
                        <label htmlFor="promotions">Receive promotional emails:</label>
                        <input
                            type="checkbox"
                            id="promotions"
                            onChange={() => setPromotionsOptIn(!promotionsOptIn)}
                            checked={promotionsOptIn}
                        />
                    </p>

                    <p>
                        <label htmlFor="debugOptIn">Use my logs for debugging:</label>
                        <input
                            type="checkbox"
                            id="debugOptIn"
                            onChange={() => setDebugOptIn(!debugOptIn)}
                            checked={debugOptIn}
                        />
                    </p>
                </div>

                <button disabled={!EMAIL_REGEX.test(email) || !PWD_REGEX.test(pwd) || pwd !== matchPwd}>Sign Up</button>
            </form>
            <p>
                Already registered?<br />
                <span className="line">
                    <Link to="/">Sign In</Link>
                </span>
            </p>
        </section>
    );

    return content;
};

export default Register;
