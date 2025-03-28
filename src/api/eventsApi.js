import { useEffect, useMemo, useReducer, useState } from "react";
import fetchReducer from "../reducers/fetchReducer";
import { ACTION_TYPES } from "../reducers/postActionTypes";
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, updateDoc,  } from "firebase/firestore";
import { db } from "../../firebaseinit";
import { checkData } from "../utils/formUtils";
import { createImageUrl } from "../utils/createImageUrl";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

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
    const [fetchState, fetchDispactch] = useReducer(fetchReducer.reducer, {
        pending: false,
        error:null
    })

    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()

        try{
            checkData(state, ['additinal'])
            fetchDispactch({type:ACTION_TYPES.FETCH_START})

            const imageUrl = await createImageUrl(state.imageUrl)

            await addDoc(collection(db, 'events'), {
                ...state,
                imageUrl:imageUrl,
                interested:[],
                createdAt: Date.now(),
            })

            fetchDispactch({type:ACTION_TYPES.FETCH_FINAL})
            dispatch({type:'RESET'})
            navigate('/events')
        } catch(err){
            console.log(err);
            
            fetchDispactch({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
        }

        
        
        dispatch({ type: "RESET" });
    }

    return[state, dispatch,formSubmit, fetchState.pending, fetchState.error]

    
}

export function useFecthOneEvent(eventID){
    const {user} = useAuth()
    const [state, dispach] = useReducer(fetchReducer.reducer, fetchReducer.INITAL_FETCH_STATE)
    const [localInterested, setLocalInterested] = useState([]);

    useEffect(() => {
        let isCancelled = false

        const getData = async () => {
            const eventRef = doc(db, 'events', eventID)
            dispach({type:ACTION_TYPES.FETCH_START})

            try{
                const eventDoc = await getDoc(eventRef)
    
                if (!eventDoc.exists()) throw new Error('Event doesnt exist!');
                dispach({type:ACTION_TYPES.FETCH_SUCCESS, data:{...eventDoc.data(), id:eventDoc.id}})
                setLocalInterested(eventDoc.data().interested || [])

            } catch(err){
                dispach({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
            }

        }

        if(!eventID) return

        if(!isCancelled) getData()

        return () => isCancelled = true
    }, [eventID])

    const joinEventHandler = async () => {
        try{
            const eventRef = doc(db, 'events', eventID)
            dispach({type:ACTION_TYPES.FETCH_START})

            await updateDoc(eventRef, {
                interested: arrayUnion(user.email)
            });
            dispach({type:ACTION_TYPES.FETCH_FINAL})
            setLocalInterested(l => [...l, user.email])

        } catch(err){
            dispach({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
            setLocalInterested(l => l.filter(email => !email !== user.email))
        }
    }

    const isInterested = useMemo(() => localInterested.includes(user?.email), [localInterested, user?.email])

    return [state.pending, state.data, state.error, joinEventHandler, isInterested]
}
