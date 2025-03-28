import { Link } from "react-router";

export default function DropDownMenu({mobile}) {
   return (
    <div className="absolute right-5 z-50 top-20 flex w-60 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
        {mobile && (
            <>
            <Link 
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                to="/books">
                Books
            </Link>
            <Link 
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                to="/events">
                Events
            </Link>
            <Link 
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                to="/books/create">
                Create Offer
            </Link>
            </>
        )}
        <Link 
            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/user">
        Account
        </Link>
        <Link 
            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/chats">
        Chats
        </Link>
        <Link 
            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/logout">
        Logout
        </Link>
    </div>
   );
}
