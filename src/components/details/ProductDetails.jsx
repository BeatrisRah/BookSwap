import { Link, useParams } from "react-router"
import { useFetchOne } from "../../api/booksApi"
import NotFound from "../not-found/NotFound"
import { useAuth } from "../../contexts/AuthContext"
import DetailsButtons from "./DetailsButtons"
import DeleteModal from "./DeleteModal"
import { useState } from "react"
import { useChatRoomCreate } from "../../api/chatApi"
import ErrorAlert from "../alerts/Error"


export default function ProductDetails() {
    const { bookId } = useParams()
    const { user } = useAuth()
    const [book, pending, error, deleteBookHanlder] = useFetchOne(bookId)
    const [deleteModalShow, setDelteModalShow] = useState(false)

    const [onBuyHandler, buyuPending, buyError] = useChatRoomCreate(user?.email, null, book.ownerEmail, book, 'BUY')

    const isOwner = book.owner === user?.uid;


    if (error) {
        return (
            <>
                <NotFound />
            </>)
    }

    const openDelete = () => {
        setDelteModalShow(true)
    }

    const closeDelete = () => {
        setDelteModalShow(false)
    }



    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            {pending && <div className="loader m-auto"></div>}
            {buyError && <ErrorAlert error={buyError} />}
            {deleteModalShow && <DeleteModal closeDelete={closeDelete} onDelete={deleteBookHanlder} />}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[700px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-fit rounded-md custom-shadow" src={book.imageUrl} alt="Product Image" />
                        </div>


                    </div>
                    <div className="md:flex-1 h-1/2 px-4 py-2 bg-white rounded-md">

                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mt-5 mb-2">{book.title}</h2>
                        <p className="text-gray-600 text-md mb-4">
                            {book.author}
                        </p>

                        <div className="mb-4 flex items-center gap-2">
                            <div className="inline-flex justify-center items-center gap-2">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Condition:</span>
                                <div className="bg-gray-300 dark:bg-gray-700 capitalize text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2"
                                    >
                                        {book.condition}
                                </div>
                            </div>

                            <span className="font-bold text-gray-700 dark:text-gray-300">Genre:</span>
                            <span className="text-gray-600 capitalize text-lg"> {book.genre}</span>
                            
                        </div>

                        
                        
                        <div className="mb-4">
                            <span className="font-bold text-xl text-gray-700 dark:text-gray-300">Book Description:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                {book.description}
                            </p>
                        </div>

                        <div className="mb-4">
                            <span className="font-bold text-2xl text-gray-700 dark:text-gray-300">Price:</span>
                            <span className="text-gray-600 text-3xl font-bold dark:text-gray-300"> {book.price}$</span>
                        </div>
                    
                    <div>
                        <h3 className="text-gray-500 dark:text-gray-300 text-md font-bold mb-4">
                            Posted by: {book.ownerEmail}
                        </h3>
                    </div>

                    {user ? 
                    <DetailsButtons 
                        isOwner={isOwner} 
                        bookId={bookId} 
                        bookPrice={book.price} 
                        openDelete={openDelete} 
                        onBuyHandler={onBuyHandler}
                        pending={buyuPending}/>:
                    <div className="flex -mx-2 mb-4 mt-6">
                        <div className="w-1/2 px-2">
                            <Link 
                            className="w-full bg-blue-400 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-full hover:bg-blue-500 dark:hover:bg-gray-600"
                            to={'/login'}
                                >Sigh In To Buy!
                            </Link>
                        </div>
                    </div>}
                    </div>
                </div>
            </div>
        </div>)
}