import { useParams } from "react-router";
import { useEdit, useFetchOne } from "../../api/booksApi";
import BookForm from "./BookForm";

export default function EditProduct() {
    const {bookId} = useParams()
    const [book, pending, error] = useFetchOne(bookId)
    const [fomrSumbit, handleImageChange] = useEdit('')

    //error, pending, submitHandler, handleImageChange, book, bookId}

    return (
        <BookForm data={{error, pending, book, submitHandler:fomrSumbit, handleImageChange, bookId, imagePreview:null}} />
    );
}