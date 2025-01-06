import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "./authSlice"

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
            // replaces RequireAuth with the previous location as its just routing
            // and we don't want our user to be able to navigate here
    )
}
export default RequireAuth