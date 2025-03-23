import { useAuth } from "../contexts/AuthContext"
import { checkData } from "../utils/formUtils";

export function useAuthForm(seterror){
    const {login, sighUp} = useAuth()
    
    const authFormHandler = async (previusState, formData) => {
        const userData = Object.fromEntries(formData.entries())
        try{
            seterror(null)
            checkData(userData)

            if(userData.rePass){
                if(userData.rePass !== userData.password) throw new Error('Passwords do not match!')
                await sighUp(userData.email, userData.password)
            } else{
                await login(userData.email, userData.password) 

            }
        } catch(err){
            seterror(err.message)
        }

        // return userData;
    }

    return authFormHandler;
}