import { Link } from "react-router";

export default function Navigation() {
	return (
		<nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/books">Books</Link></li>
                        <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="order-1 md:order-2">
                <Link className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " to="/">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path> </g>
                </svg>
                    BOOKSWAP
                </Link>
            </div>

            <div className="order-2 md:order-3 flex items-center" id="nav-content">
				{/* USER */}

                <Link className="inline-block no-underline hover:text-black" to="/user">
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                </Link>

				<Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/logout">Logout</Link>

				{/* GUEST */}
				<Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/register">Register</Link>
				<Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" to="/login">Login</Link>
				

                

            </div>
        </div>
    </nav>);
}