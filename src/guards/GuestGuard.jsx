import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function GuestGuard() {
    const {user, pending} = useAuth()

    if(pending) return null;
    if(user){
        return <Navigate to='/' />
    }

    return (
        <Outlet />
    );
}