import { Navigate, useParams } from "react-router";
import { useEdit, useFetchOne } from "../../api/booksApi";
import BookForm from "./BookForm";
import { useAuth } from "../../contexts/AuthContext";

export default function EditProduct() {
    const {user} = useAuth()
    const {bookId} = useParams()
    const [book, pending, error] = useFetchOne(bookId)
    const [fomrSumbit, handleImageChange, imagePreview] = useEdit(book.imageUrl, bookId)
    

    if(book.owner && book.owner !== user.uid){
        return <Navigate to='/404' />
    }


    //error, pending, submitHandler, handleImageChange, book, bookId}

    return (
        <BookForm data={{
            error, 
            pending, 
            book, 
            submitHandler:fomrSumbit, 
            handleImageChange, 
            bookId, 
            imagePreview}} />
    );
}