import { useMemo } from "react";
import { useFetch } from "../../api/booksApi";
import { useAuth } from "../../contexts/AuthContext";
import Product from "../catalog/catalog-product/Product";

export default function UserProfile() {
    const {user} = useAuth()

    const filter = useMemo(() => ({
        byOwnerId: user.uid
    }), [user.uid])

    const [pending, books] = useFetch([], filter)
    

    return (
        <section className="w-9/12 min-h-screen m-auto mt-10 mb-10  rounded-md custom-shadow">
            <div className="w-full h-45 bg-[url(/user_banner.png)] bg-cover p-4 rounded-t-md relative">
                <img 
                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                className="rounded-full absolute -bottom-20 left-1/2 -translate-x-1/2 shadow-md"
                />

            </div>
            <div className="h-4/5 bg-gray-200 pb-10">
                <div className="w-11/12 m-auto pt-25">
                    <h1 className="text-xl text-center text-gray-700 mb-10">{user.email}</h1>
                    
                    <h2 className="w-full 3xl:w-10/12 m-auto text-center font-bold p-4 bg-gray-300 text-2xl capitalize">Your book offers</h2>
                    <div className="bg-gray-100 w-full 3xl:w-10/12 m-auto rounded-b-md  border-4 border-gray-300 shadow-md">
                        {pending && <p>Loading...</p>}
                        <div className="flex flex-wrap gap-2 m-auto w-11/12 p-2 pt-4 pb-4">
                            {books.map(b => <Product book={b} key={b.id} /> )}

                        </div>
                        
                    </div>

                </div>
            </div>

        </section>
    );
}