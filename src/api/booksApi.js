import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../firebaseinit";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

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

        if(data.title === '' || 
            data.author === '' ||
            data.genre === '' ||
            data.condition === '' ||
            data.description === '' ||
            data.price === "") {
                setError('Please fill all inputs')
                setPending(false);
                return;
            }
        
        const newForm = new FormData()
        newForm.append('file', data.file);
        newForm.append('upload_preset', 'react_preset');
        
        

        try{

            const res = await fetch('https://api.cloudinary.com/v1_1/dserynjly/image/upload', {
                method:'POST',
                body:newForm,
            })
            if (!res.ok) throw new Error("Image upload failed");

            const imageData = await res.json()
            const imageUrl = imageData.secure_url;
            

            // TODO: Add owner, available(?) 
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
                            owner: user.uid
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
        

    }, [filter])

    return [pending, state]
}

export function useFetchOne(bookId){
    const [book, setBook] = useState({})
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const getBook = async() => {
            try{
                const bookRef = doc(db, 'books', bookId);
                const bookSnap = await getDoc(bookRef)

                if (!bookSnap.exists()) throw new Error('Book doesnt exist')

                setBook(bookSnap.data())
            } catch(err){
                setError(err.message)
            } finally{
                setPending(false)
            }
        }

        getBook()
    }, [bookId])

    return [book, pending, error]
}