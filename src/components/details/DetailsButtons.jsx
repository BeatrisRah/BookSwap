import { useNavigate } from "react-router"

export default function DetailsButtons({isOwner, bookId, openDelete}) {
    const navigate = useNavigate()

    return (
    <>
    {isOwner ? 
        <div className="flex -mx-2 mb-4">
            <div>
                <button 
                className="w-20 text-white py-2 px-4 rounded-full font-bold dark:hover:bg-gray-700"
                onClick={() => {navigate(`/books/${bookId}/edit`)}}
                ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#52cb6a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#52cb6a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg></button>
            </div>
            <div>
                <button 
                className="w-20 text-gray-100 dark:text-white py-2 px-4 rounded-full font-bold"
                onClick={openDelete}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ea3434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 12V17" stroke="#ea3434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#ea3434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ea3434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ea3434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
                
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