import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Product from "./catalog-product/Product";

export default function ProductList({filter}) {
    const [pending, bookList] = useFetch('get', [], filter)
    const [isOpen, setIsOpen ] = useState(false)

    const filters = ["All", "Newest", "Price: High to Low", "Price: Low to High"]

    const handleFilterChange = (filter) => {
        // setSearchParams({ filter: filter.toLowerCase().replace(/\s+/g, "-") });
        setIsOpen(false);
    };

    return (
        <section className="bg-white py-8 w-11/12 m-auto">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center md:justify-center lg:justify-between mt-0 px-2 py-3 ">
                        <div
                            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                        >
                            
                            {filter ? 'Recently Added': 'BookList'}
                        </div>
                        

                        <div className="flex items-center" id="store-nav-content">
                            <div className="relative">
                                <button 
                                    className="pl-3 inline-block no-underline hover:text-black"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <svg
                                        className="fill-current hover:text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                    </svg>
                                </button>
                                {isOpen && 
                                    (<div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg" >
                                        {filters.map(f => (
                                            <button 
                                            key={f} 
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                            onClick={() => handleFilterChange(f)}
                                            >
                                            {f}
                                            </button>
                                        ))}
                                    </div>)}
                            </div>

                            <a
                                className="pl-3 inline-block no-underline hover:text-black"
                                href="#"
                            >
                                <svg
                                    className="fill-current hover:text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="w-full p-6 flex flex-row m-auto justify-center gap-4 flex-wrap lg:justify-start lg:flex-nowrap">
                    {pending ? <div className="loader"></div> : 
                    bookList.map(el => <Product book={el} key={el.id} />)}
                    
                    

                    
                </div>
            </div>
        </section>
    );
}
