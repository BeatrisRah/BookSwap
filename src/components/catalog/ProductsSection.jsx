import { memo, useEffect, useState } from "react";
import Product from "./catalog-product/Product";
import { useFetch } from "../../api/booksApi";
import {  useSearchParams } from "react-router";

import Sidebar from "./SideBar";
import PaginationCatalog from "./PaginationCatalog";

function ProductList({filter = {}}) {
    const [defaultFilter, setFaultFilter] = useState(filter)
    const [isOpen, setIsOpen ] = useState(false)
    const [inputVal, setInputVal] = useState('')

    const [pending, bookList, currentPage, pages] = useFetch([], defaultFilter)
    const [searchParams, setSearchParams] = useSearchParams();



    const filters = [
        { name: "All", value: "all" },
        { name: "Newest", value: "newest" },
        { name: "Price: High to Low", value: "price-high" },
        { name: "Price: Low to High", value: "price-low" },
    ];

    const handleFilterChange = (filterVal, filterType) => {
        const currentPAram = Object.fromEntries(searchParams.entries());
        setSearchParams({...currentPAram, [filterType]: filterVal});
        setIsOpen(false);
    };

    useEffect(() => {
        const filters = Object.fromEntries(searchParams.entries());
        setFaultFilter(f => ({...f, ...filters}))
        
    }, [searchParams])

    return (
    <>
        {!filter.latest && <div className="bg-[url(/catalog_banner.png)] bg-cover bg-center w-full h-60"></div>}

        <section className="bg-white py-8 w-full m-auto">
            <div className="mx-auto flex items-center flex-wrap pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className={`mx-auto flex flex-wrap items-center md:justify-center lg:justify-end mt-0 px-2 py-3 ${
                        filter.latest ? 
                        'w-11/12' :
                        'w-10/12'
                    }`}>
                        
                        

                        {filter.latest ? '' :
                        <>
                        <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                            
                            <div className="relative">
                                <input
                                    type="text"
                                    className="h-10 w-96 pr-5 pl-5 rounded-full z-0 border-2 focus:shadow-md focus:outline-none"
                                    placeholder="Search titles..."
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.currentTarget.value)}
                                />
                            </div>
                            
                            
                            </div>
                                <div className="flex items-center" id="store-nav-content">
                                    <div className="relative">
                                        <button
                                            className="pl-3 inline-block no-underline hover:text-black"
                                            onClick={() => handleFilterChange(inputVal, 'title')}
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
                                        </button>
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
                                                    key={f.value} 
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange(f.value, 'sortBy')}
                                                    >
                                                    {f.name}
                                                    </button>
                                                ))}
                                            </div>)}
                            </div>

                        </div></>}
                    </div>
                </nav>
                <div className="w-11/12 flex m-auto">
                    {!filter.latest && <Sidebar handleFilterChange={handleFilterChange} />}
                    <div className="w-10/12 p-6 flex flex-row justify-center gap-4 flex-wrap md:w-full lg:justify-start">
                        
                        {pending ? <div className="loader m-auto"></div> : 
                        bookList.map(el => <Product book={el} key={el.id} />)}
                        {!pending && bookList.length === 0 && <p>No books</p>}
                    </div>
                </div>

            </div>
            {!filter.latest && <PaginationCatalog pages={pages} currentPage={currentPage} handleFilterChange={handleFilterChange} />}
        </section>
    </>
    );
}

export default memo(ProductList)