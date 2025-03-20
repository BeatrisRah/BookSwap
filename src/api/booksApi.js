import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../firebaseinit";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import {  createImageUrl } from "../utils/createUpdateUtils";
import { checkData } from "../utils/formUtils";
export function useCreateBook(){
    const [error, setError] = useState(null)
    const [newBook, setNewBook] = useState({})
    const [pending, setPending] = useState(false)
    // ! GUEST CANT MAKE REQUESTS
    const {user} = useAuth()
    const navigate = useNavigate()

    const formSubmit = async (e) => {
        e.preventDefault()
        setPending(true)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries([...formData])
        setNewBook(data)
        
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
            
            navigate('/books')
        } catch(err){
            setError(err.message)
            return;
        } finally{
            setPending(false)
        }
        setError(null)
        setNewBook({})
    }


    return [formSubmit, newBook, pending , error]
}

export function useFetch( defaultState = [], filter ={}){
    const [pending, setPending] = useState(true)
    const [state, setState] = useState(defaultState)

    // ** TYPE: ONE DOCUMENT OR ALL

    useEffect(() => {
        setPending(true)
        
        
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
                q = query(q, orderBy('createdAt', 'desc'), limit(4))
                
            }else if (filter?.sortBy === "newest") {
                q = query(q, orderBy("createdAt", "desc"));

            } else if (filter?.sortBy === "price-high") {
                q = query(q, orderBy("price", "desc"), orderBy("__name__"));

            } else if (filter?.sortBy === "price-low") {
                q = query(q, orderBy("price", "asc"), orderBy("__name__"));
            }

            

            const querySnapShot = await getDocs(q);
            setPending(false)
            return querySnapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            
        }
        getData().then(res => setState(res))
        

    }, [filter])

    return [pending, state]
}

export function useFetchOne(bookId){
    const [book, setBook] = useState({})
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()


    useEffect(() => {
        const getBook = async() => {
            try{
                const bookRef = doc(db, 'books', bookId);
                const bookSnap = await getDoc(bookRef)

                if (!bookSnap.exists()) throw new Error('Book doesnt exist!');

                setBook(bookSnap.data())
            } catch(err){
                setError(err.message)
            } finally{
                setPending(false)
            }
        }
        if(!bookId) {
            return;
        };

        getBook()

    }, [bookId])

    const deleteBookHanlder = async () => {
        try{
            await deleteDoc(doc(db, 'books', bookId))
            navigate('/books')
        } catch(err){
            setError(err.message)
        }
    }

    return [book, pending, error, deleteBookHanlder]
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

