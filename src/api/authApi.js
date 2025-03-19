import { useAuth } from "../contexts/AuthContext"
import { checkData } from "../utils/createUpdateUtils"
import { useNavigate } from "react-router";


export function useAuthForm(seterror){
    const navigate = useNavigate()
    const {login, sighUp} = useAuth()
    
    const authFormHandler = async (previusState, formData) => {
        const userData = Object.fromEntries(formData.entries())
        try{
            seterror(null)
            checkData(userData)

            if(userData.rePass){
                await sighUp(userData.email, userData.password)
            } else{
                await login(userData.email, userData.password) 

            }
            navigate('/books')
        } catch(err){
            seterror(err.message)
        }

        return userData;
    }

    return authFormHandler;
}