import { Link } from "react-router";

export default function DropdownMobile({user}) {
   return (
    <div className="absolute right-5 z-50 top-20 flex w-70 text-center flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
    <Link 
        className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        to="/books">
        Books
    </Link>
    <Link 
        className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
        to="/events">
        Events
    </Link>
    {user ? 
    <>
        <Link 
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/books/create">
            Create Offer
        </Link>
        <Link 
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/user">
        Account
        </Link>
        <Link 
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/chats">
        Chats
        </Link>
        <Link 
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/logout">
        Logout
        </Link> </>:
        <>
        <Link 
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/login">
            Login
        </Link>
        <Link 
            className="my-2 block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            to="/register">
            Register
        </Link>
        </> 
    }
</div>
   );
}