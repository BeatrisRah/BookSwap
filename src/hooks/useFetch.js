import { useEffect, useState } from "react";
import { db } from "../../firebaseinit";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";


export default function useFetch(type ,defaultState = [], filter ={}){
    const [pending, setPending] = useState(true)
    const [state, setState] = useState(defaultState)

    // ** TYPE: ONE DOCUMENT OR ALL

    useEffect(() => {
        setPending(true)
        
        
        const getData = async () => {
            let querySnapShot = null;

            if(filter.latest){
                const q = query(collection(db, 'books'), orderBy('createdAt', 'desc'), limit(3))
                querySnapShot = await getDocs(q)
            } else{
                querySnapShot = await getDocs(collection(db, 'books'));

            }
            setPending(false)
            return querySnapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            
        }
        getData().then(res => setState(res))
        

    }, [type])

    return [pending, state]
}