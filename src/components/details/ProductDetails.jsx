import { Link, useParams } from "react-router"
import { useFetchOne } from "../../api/booksApi"
import NotFound from "../not-found/NotFound"
import { useAuth } from "../../contexts/AuthContext"
import DetailsButtons from "./DetailsButtons"

export default function ProductDetails() {
    const {bookId} = useParams()
    const [book, pending, error] = useFetchOne(bookId)
    const {user} = useAuth()
    const isOwner = book.owner ===  user?.uid;


    if (error){
        return (
        <>
            <NotFound />
        </>)
    }
    
    return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
        {pending && <div className="loader m-auto"></div>}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[700px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-fit" src={book.imageUrl} alt="Product Image" />
                    </div>
                    {user ? <DetailsButtons isOwner={isOwner} />:
                    <div className="flex -mx-2 mb-4 mt-6">
                        <div className="w-1/2 px-2">
                            <Link 
                            className="w-full bg-blue-400 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-blue-500 dark:hover:bg-gray-600"
                            to={'/login'}
                                >Sigh In To Buy!
                            </Link>
                        </div>
                    </div>}
                    
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{book.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {book.author}
                    </p>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                            <span className="text-gray-600 dark:text-gray-300"> {book.price}$</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Genre:</span>
                            <span className="text-gray-600 dark:text-gray-300 capitalize"> {book.genre}</span>
                        </div>
                    </div>
                    
                    <div className="mb-4 inline-flex justify-center items-center gap-2">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Condition:</span>
                        <div className="bg-gray-300 dark:bg-gray-700 capitalize text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2"
                            >
                                {book.condition}
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Book Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {book.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-gray-500 dark:text-gray-300 text-md font-bold mb-4">
                            Posted by: {book.ownerEmail}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>)}