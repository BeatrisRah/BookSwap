import { Link } from "react-router";

export default function Product({ book }) {
    return (

        <Link to={`/books/${book.id}/details`} className="w-full max-w-xs bg-white custom-shadow-xs flex flex-col justify-items-center rounded-md p-4">
            <div className="w-full h-4/6" to={`/books/${book.id}/details`}>
                <img 
                    src={book.imageUrl} 
                    alt={`${book.title} cover`}
                    className="w-full h-full m-auto rounded-md custom-shadow-smaller" />
            </div>
            <div className="my-4 p-2 flex flex-col h-1/6">
                <h2 className="text-sm text-gray-500 italic">Posted By: {book.ownerEmail}</h2>
                <h1 className="text-xl text-black font-bold mt-2">{book.title}</h1>
                <h2 className="text-gray-500">{book.author}</h2>
            </div>
            <h1 className="px-2 font-bold text-gray-700 text-3xl">${book.price}</h1>
            {book.price === 0 && (
            <span className="px-2 py-1 w-20 text-sm font-bold text-white bg-green-500 rounded-md">
                Donating
            </span>
            )}
        </Link>
    );
}


// <div className="group flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
        //     <Link className="relative flex h-90 overflow-hidden" to={`/books/${book.id}/details`}>
        //         <img className="absolute top-0 right-0 h-full w-full object-fit" src={book.imageUrl} alt="product image" />
        //     </Link>
        //     <div className="mt-4 px-5 pb-5">
        //         <div className="h-15">
        //             <h5 className="text-xl tracking-tight text-slate-900">{book.title}</h5>
        //             <span className="text-sm text-slate-900">{book.author}</span>
        //         </div>
        //         <div className="mt-8 mb-3 flex items-center justify-between">
        //             <p>
        //                 <span className="text-3xl font-bold text-slate-900">{book.price}$</span>
        //             </p>
        //         </div>
        //         <Link to={`/books/${book.id}/details`}>
        //             <button className="flex items-center justify-center rounded-md bg-blue-500 px-2 py-2 text-sm text-white transition hover:bg-gray-700">
        //             <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        //                 Details
        //             </button>
        //         </Link>
        //     </div>
        // </div>