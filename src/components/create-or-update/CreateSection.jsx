import { useState } from "react";
import { useCreateBook } from "../../api/booksApi";
import BookForm from "./BookForm";


export default function CreateSection() {

    const [createFormSubmit, newBook, pending , error] = useCreateBook()
    const [imagePreview, setImagePreview ] = useState(null)
    

    const handleImageChange = (e) => {
        const file = e.currentTarget.files[0]
        if(file){
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }


    return (
        <BookForm data={{error, pending, submitHandler: createFormSubmit, handleImageChange, book:newBook, imagePreview}} />
    );
}