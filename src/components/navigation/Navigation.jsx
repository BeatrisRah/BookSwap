import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DropDownMenu from "./DropDownMenu";

export default function Navigation() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false)
    const [hamburgerShow, setHamburgerShow] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    return (
        <header className="bg-white w-11/12 m-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link className="inline-flex items-center text-teal-600" to='/' >
                            <span className="sr-only">Home</span>
                            <img src="/BookSwapLogo.png" className="w-12" />
                            <p className="text-lg font-bold text-gray-400">ookSwap</p>
                        </Link>

                        
                    </div>
                    <div className="block md:hidden">
                        <button 
                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                        onClick={() => setHamburgerShow(h => !h)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {hamburgerShow && <DropDownMenu mobile={true} />}


                    <div className="hidden md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li className="hover:bg-gray-100 px-4 py-2 rounded-md hover:shadow-md">
                                    <Link className="text-gray-500 font-semibold transition hover:text-gray-500/75" to='/books'> Books </Link>
                                </li>
                                <li className="hover:bg-gray-100 px-4 py-2 rounded-md hover:shadow-md">
                                    <Link className="text-gray-500 font-semibold transition hover:text-gray-500/75" to='/events'> Events </Link>
                                </li>
                                
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {user ? 
                            <div className="sm:flex sm:gap-4">
                                <Link
                                        className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        to='/books/create'
                                    >
                                        Create Offer
                                    </Link>
                                <button 
                                className="p-2"
                                onClick={() => setIsOpen(o => !o)}>
                                    <svg
                                        className="fill-current hover:text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle fill="none" cx="12" cy="7" r="3" />
                                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                                    </svg>
                                </button>
                                </div> :
                                <>
                                <div className="sm:flex sm:gap-4">
                                    <Link
                                        className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        to='/login'
                                    >
                                        Login
                                    </Link>
                                </div>

                                <div className="hidden sm:flex">
                                    <Link
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                        to='/register'
                                    >
                                        Register
                                    </Link>
                                </div>
                                </>}
                            
                                {isOpen && <DropDownMenu mobile={false} />}
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    );
}
