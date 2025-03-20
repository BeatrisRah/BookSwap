import { Link, useParams } from "react-router";
import { useFetch, useFetchOne } from "../../api/booksApi";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useChatRoomCreate } from "../../api/chatApi";
import ErrorAlert from "../alerts/Error";

export default function TradeSection() {
    const {bookId} = useParams()

    const [book] = useFetchOne(bookId)
    const {user} = useAuth()
    const [ownerIdFilter] = useState({byOwnerId:user.uid}) //Makes infidante loop if filter is not state
    const [selectedBook, setSelectedBook] = useState(null)

    const [onTradeHandler, pendingOnChat, error] = useChatRoomCreate(user.email, selectedBook, book.ownerEmail, book)

    const [pending, usersBooks] = useFetch([], ownerIdFilter)
    const isBookList = usersBooks.length > 0;
    
    return (
        <section className="w-full bg-[url(/blue_bg.png)] pb-10 bg-center bg-cover">
            {error && <ErrorAlert error={error} />}
            <div className="flex gap-2 w-11/12 m-auto p-12 pb-3">
                <div className="w-1/3 p-12 rounded-md">
                    <img src={book.imageUrl} className="w-full rounded-md custom-shadow" />
                    <div className="py-3">
                        <h1 className="text-3xl text-black mb-2">{book.title}</h1>
                        <p>{book.author}</p>
                        
                    </div>
                </div>
                <div className="w-2/3 p-10 rounded-md bg-white">
                    <h1 className="text-4xl font-semibold text-gray-700 mb-10">Trade For:</h1>
                    <div>
                        {pending && <div className="loader m-auto"></div>}
                        {isBookList ? 
                        (usersBooks.map(book => 
                        <div 
                            key={book.id} 
                            className="w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                            onClick={() => setSelectedBook(book)}
                            >
                            <div>
                                <img src={book.imageUrl} alt="Product" className="h-60 w-full object-cover rounded-t-xl" />
                                <div className="px-4 py-3 w-72">
                                <p className="text-lg font-bold text-black truncate block capitalize">{book.title}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">{book.price}$</p>
                                </div>
                                </div>
                            </div>
                        </div>)): 
                        <h2 className="text-gray-400">You haven't posted any book offers!</h2>}
                        

                    </div>

                </div>
                
            </div>
            <div className="flex flex-col w-1/4 ml-auto sm:flex-row">
                <Link to="/register"
                    className="flex items-center justify-center px-4 py-4 text-sm text-gray-400 font-bold leading-6 capitalize duration-100 transform border-2 rounded-md cursor-pointer border-gray-300 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 sm:mr-3 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
                    Cancel
                </Link>
                <button
                    disabled={pendingOnChat}
                    onClick={onTradeHandler}
                    className={`flex items-center justify-center px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-md cursor-pointer border-gray-300 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 sm:mr-3 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1 ${
                        isBookList ? 
                        'bg-blue-400 text-white cursor-pointer' :
                        'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}>
                    Continue Trade
                    <span className="ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
}
