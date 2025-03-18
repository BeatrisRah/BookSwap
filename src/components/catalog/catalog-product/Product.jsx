import { Link } from "react-router";

export default function Product({book}) {
   return (
    <div className="p-6 max-w-sm border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#">
        <img src={book.imageUrl} className="h-3/4 shadow rounded-lg overflow-hidden border" />
        <div className="mt-8 flex flex-col justify-center items-center">
            <h4 className="font-bold text-xl text-center">{book.title}</h4>
            <p>{book.price}$</p>
            <div className="mt-5">
                <Link to={`/books/${book.id}/details`} className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                    Details
                </Link>
            </div>
        </div>
    </div>
   );
}