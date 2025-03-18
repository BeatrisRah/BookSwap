import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

export default function Logout() {
    const {logout} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const logoutUser = async () => {
            try{
                await logout()
            } catch(err){
                console.log(err.message);
            } finally{
            navigate('/')

            }
            
        }
        logoutUser()
    }, [])

    return (
    <p>Logging out...</p>);
}