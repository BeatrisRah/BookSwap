import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";

import { db } from "../../firebaseinit";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import {  createImageUrl } from "../utils/createImageUrl";
import { checkData } from "../utils/formUtils";
import { ACTION_TYPES } from "../reducers/postActionTypes";
import fetchReducer from "../reducers/fetchReducer";

const HERO_SECTION_BOOOK_LIMIT = 5;


export function useCreateBook(){
    const [state, dispatch] = useReducer(fetchReducer.reducer, fetchReducer.INITAL_FETCH_STATE)

    const {user} = useAuth()
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:ACTION_TYPES.FETCH_START})

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries([...formData])
        dispatch({type:ACTION_TYPES.FETCH_CURRENT_DATA, data:data})
        try{
            checkData(data)
            const imageUrl = await createImageUrl(data.file)
            const docRef = await addDoc(collection(db, 'books'), 
                        {
                            title:data.title,
                            author: data.author,
                            genre: data.genre,
                            condition: data.condition,
                            description: data.description,
                            price: Number(data.price),
                            imageUrl,
                            createdAt: Date.now(),
                            owner: user.uid,
                            ownerEmail:user.email
                        })
            // adding the id to doc
            await updateDoc(doc(db, 'books', docRef.id), {id:docRef.id})
            dispatch({type:ACTION_TYPES.FETCH_FINAL})

            navigate('/books')
        } catch(err){
            dispatch({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
            return;
        } 
    }


    return [formSubmit, state.data, state.pending , state.error]
}

export function useFetch( defaultState = [], filter ={}){
    const [state, dispatch] = useReducer(fetchReducer.reducer, {
        data: defaultState,
        pending: true,
    })


    useEffect(() => {
        let isCancelled = false
        
        const getData = async () => {
            let q = collection(db, 'books')

            if(filter?.byOwnerId){
                q = query(q, where('owner', '==', filter.byOwnerId))
            }

            if(filter?.genre && filter?.genre !== 'all'){
                const formattedFilter = filter.genre.replace('-', ' ')
                q = query(q, where('genre', '==', formattedFilter))
            }

            if(filter?.latest){
                q = query(q, orderBy('createdAt', 'desc'), limit(HERO_SECTION_BOOOK_LIMIT))
                
            }else if (filter?.sortBy === "newest") {
                q = query(q, orderBy("createdAt", "desc"));

            } else if (filter?.sortBy === "price-high") {
                q = query(q, orderBy("price", "desc"), orderBy("__name__"));

            } else if (filter?.sortBy === "price-low") {
                q = query(q, orderBy("price", "asc"), orderBy("__name__"));
            }

            

            const querySnapShot = await getDocs(q);
            return querySnapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            
        }
        if(!isCancelled){
            getData().then(res => dispatch({type:ACTION_TYPES.FETCH_SUCCESS, data:res}))
        }
        
        return () => {
            isCancelled = true
        }
    }, [filter])

    return [state.pending, state.data]
}

export function useFetchOne(bookId){

    const [state, dispatch] = useReducer(fetchReducer.reducer, fetchReducer.INITAL_FETCH_STATE)

    const navigate = useNavigate()


    useEffect(() => {
        let isCancelled = false;
        const getBook = async() => {
            try{
                const bookRef = doc(db, 'books', bookId);
                dispatch({type:ACTION_TYPES.FETCH_START})

                if(!isCancelled){
                    const bookSnap = await getDoc(bookRef)

                    if (!bookSnap.exists()) throw new Error('Book doesnt exist!');

                    dispatch({type:ACTION_TYPES.FETCH_SUCCESS, data:bookSnap.data()})
                }
                
            } catch(err){
                dispatch({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
            }
        }
        if(!bookId) {
            return;
        };

        getBook()

        return () => {
            isCancelled = true
        }

    }, [bookId])

    const deleteBookHanlder = async () => {
        try{
            await deleteDoc(doc(db, 'books', bookId))
            dispatch({type:ACTION_TYPES.FETCH_FINAL})
            navigate('/books')
        } catch(err){
            dispatch({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
        }
    }

    return [state.data, state.pending, state.error, deleteBookHanlder]
}


export function useEdit(currentImage, bookId){
    const [imageObject, setImageObject] = useState({}); 
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentImage) return;
        setImageObject({imagePreview: currentImage, imageFile:currentImage})
    }, [currentImage]); 

    const changeImageUrl = (e) => {
        const file = e.currentTarget.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageObject({imagePreview: reader.result, imageFile:file})
        };
        reader.readAsDataURL(file);
    };


    const formSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries([...formData])

        delete data.file; //Delete image file bere checking,uploading
        try{
            checkData(data)
            if (imageObject.imageFile !== currentImage){
                const imageUrl = await createImageUrl(imageObject.imageFile)
                data.imageUrl = imageUrl;
            }

            const bookRef = doc(db, 'books', bookId)
            await updateDoc(bookRef, {...data, price:Number(data.price)})
            navigate(`/books/${bookId}/details`)
        } catch(err){
            console.log(err.message);
            

        }

    }

    return [formSubmit, changeImageUrl, imageObject.imagePreview]
}

