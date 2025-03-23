import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function AuthGuard() {
    const {user} = useAuth()

    if(!user){
        return <Navigate to='/404' />
    }

    return <Outlet />

}