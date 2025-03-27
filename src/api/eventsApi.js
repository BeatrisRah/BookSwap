import { useEffect, useReducer } from "react";
import fetchReducer from "../reducers/fetchReducer";
import { ACTION_TYPES } from "../reducers/postActionTypes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseinit";

export function useFetchEvents(){
    const [state, dispach] = useReducer(fetchReducer.reducer, {
        pending:true,
        data:[],
        error:null
    })

    useEffect(() => {
        let isCancelled = false

        const getData = async () => {
            try{
                dispach({type:ACTION_TYPES.FETCH_START})
                const querySnapShot = await getDocs(collection(db, 'events'))
                const docs = querySnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                dispach({type:ACTION_TYPES.FETCH_SUCCESS, data:docs})
            } catch(err){
                dispach({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
            }
        }

        if(!isCancelled){
            getData()
        }

        return () => isCancelled = true;
    }, [])

    return [state.pending, state.data]
}