import { useEffect, useState } from "react";
import { db } from "../../firebaseinit";
import { collection, getDocs } from "firebase/firestore";


export default function useFetch(type ,defaultState = []){
    const [pending, setPending] = useState(true)
    const [state, setState] = useState(defaultState)

    // ** TYPE: ONE DOCUMENT OR ALL

    useEffect(() => {
        setPending(true)
        
        
        const getData = async () => {
            // TODO: Change metjod on diffrent types

            const querySnapShot = await getDocs(collection(db, 'books'));
            setPending(false)
            return querySnapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            
        }
        getData().then(res => setState(res))
        

    }, [type])

    return [pending, state]
}