import { Link } from "react-router";

export default function NotFound() {
    return (
    <section className="flex items-center h-screen bg-[url(/404_bg.png)] bg-cover bg-center dark:bg-gray-700">
        <div className="container m-auto flex flex-col items-center ">
            <div className="flex flex-col gap-6 max-w-md text-center">
                <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl md:text-3xl dark:text-gray-400">Sorry, we couldn't find this page.</p>
                <Link to="/" className="px-8 py-4 text-xl font-semibold rounded bg-blue-500 text-gray-50 hover:text-gray-200">Back to home</Link>
            </div>
        </div>
    </section>
    );
}