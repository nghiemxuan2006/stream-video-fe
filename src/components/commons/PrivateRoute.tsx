import { useAppSelector } from "../../app/hook"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="login" />
    )
}

export default PrivateRoute