import { useNavigate } from "react-router"

export default function DetailsButtons({isOwner, bookId, openDelete}) {
    const navigate = useNavigate()

    return (
    <>
    {isOwner ? 
        <div className="flex -mx-2 mb-4">
            <div className="w-1/2 px-2">
                <button 
                className="w-full bg-green-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-green-800 dark:hover:bg-gray-700"
                onClick={() => {navigate(`/books/${bookId}/edit`)}}
                >Edit</button>
            </div>
            <div className="w-1/2 px-2">
                <button 
                className="w-full bg-red-800 dark:bg-gray-700 text-gray-100 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-red-700 dark:hover:bg-gray-600"
                onClick={openDelete}
                >Delete</button>
                
            </div>
        </div>:
        <div className="flex -mx-2 mb-4">
            <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Trade</button>
            </div>
            <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Buy</button>
            </div>
        </div>}
    </>
    )}