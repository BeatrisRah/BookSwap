import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseinit";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [pending, setLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe()
    }, [])

    const sighUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logout = () => {
        return signOut(auth)
    }

    return(
        <AuthContext.Provider value={{user, pending, sighUp, login, logout}}>
            {!pending && children}
        </AuthContext.Provider>
    )
}
