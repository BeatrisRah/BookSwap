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
            let q = collection(db, 'books')

            if(filter?.latest){
                q = query(q, orderBy('createdAt', 'desc'), limit(4))
                
            }else if (filter?.sortBy === "newest") {
                q = query(q, orderBy("createdAt", "desc"));

            } else if (filter?.sortBy === "price-high") {
                q = query(q, orderBy("price", "desc"));

            } else if (filter?.sortBy === "price-low") {
                q = query(q, orderBy("price", "asc"));
            }

            const querySnapShot = await getDocs(q);
            setPending(false)
            return querySnapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            
        }
        getData().then(res => setState(res))
        

    }, [type, filter])

    return [pending, state]
}