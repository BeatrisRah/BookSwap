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
const initalState ={
    title:'',
    date:'',
    imageUrl:'',
    location:'',
    description:'',
    additinal:[],
    
}
const reducer = (state, action) => {
    switch(action.type){
        case 'SET_TITLE':
            return{
                ...state,
                title: action.data
            }
        case 'SET_DATE':
            return{
                ...state,
                date: action.data
            }
        case "SET_DESCRIPTION":
            return { ...state, description: action.data };

        case "SET_LOCATION":
            return { ...state, location: action.data };

        case "ADD_ITEM":
            return { ...state, additinal: [...state.additinal, action.data] };
        case "REMOVE_ITEM":
            return {
            ...state,
            additinal: state.additinal.filter((_, index) => index !== action.data),
        };
        case "SET_FILE":
            return { ...state, imageUrl: action.data };
        case "RESET":
            return initalState;
        default:
            return state;
    }
}
export function useCreateEvent(){
    const [state, dispatch] = useReducer(reducer, initalState)

    const formSubmit = (e) => {
        e.preventDefault()

        console.log(state);
        

    }

    return[state, dispatch,formSubmit]

    
}