import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Navigation() {
    const {user} = useAuth()
	return (
	<nav className="w-full z-30 top-0 py-1">
        <div className="w-11/12 mx-auto flex flex-wrap items-center justify-between mt-0 px-4 py-3">

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul className="md:flex items-center gap-1 justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/books">Books</Link></li>
                        {user && <li><Link className="inline-block border-2 rounded-md border-blue-400 no-underline text-blue-400 hover:text-black hover:underline py-2 px-4" to="/books/create">Create Offer</Link></li>}                    
                    </ul>
                </nav>
            </div>

            <div className="order-1 md:order-2">
                <Link className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " to="/">
                <img src="/BookSwapLogo.png" className="w-10" />
                    OOKSWAP
                </Link>
            </div>

            <div className="order-2 md:order-3 flex items-center" id="nav-content">
				{/* USER */}
                {user && (<>
                <Link className="inline-block no-underline hover:text-black" to="/user">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                </Link>
                <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/logout">Logout</Link></>)}


				{/* GUEST */}
                {!user && <>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/register">Register</Link>
                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/login">Login</Link></>}

                    <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/about">About</Link>

            </div>
        </div>
    </nav>);
}