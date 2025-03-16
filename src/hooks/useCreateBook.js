import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebaseinit";
import { useNavigate } from "react-router";

export default function useCreateBook(){
    const [error, setError] = useState(null)
    const [newBook, setNewBook] = useState({})
    const [pending, setPending] = useState(false)
    const navigate = useNavigate()

    const formSubmit = async (formData) => {
        const data = Object.fromEntries([...formData])
        setNewBook(data)

        if(data.title === '' || 
            data.author === '' ||
            data.genre === '' ||
            data.condition === '' ||
            data.description === '' ||
            data.price === "") {
                setError('Please fill all inputs')
                return;
            }
        
        const newForm = new FormData()
        newForm.append('file', data.file);
        newForm.append('upload_preset', 'react_preset');
        
        

        try{
            setPending(true)
            const res = await fetch('https://api.cloudinary.com/v1_1/dserynjly/image/upload', {
                method:'POST',
                body:newForm
            })
            const imageData = await res.json()
            const imageUrl = imageData.secure_url;
            
            await addDoc(collection(db, 'books'), 
                        {
                            title:data.title,
                            author: data.author,
                            genre: data.genre,
                            condition: data.condition,
                            description: data.description,
                            price: Number(data.price),
                            imageUrl,
                            createdAt: Date.now()
                        })
            navigate('/books')
        } catch(err){
            setError(err.message)
            return;
        }

        setPending(false)
        setError(null)
        setNewBook({})
    }


    return [formSubmit, newBook, pending , error]
}