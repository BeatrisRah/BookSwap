export default function Aboout() {
    return (
        <section className="text-gray-600 body-font bg-white mb-20 dark:bg-slate-900">
            <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://images.unsplash.com/vector-1739461173549-0230abc7d937?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>

                <div className="lg:flex-grow mt-5 md:mt-0 ml-20 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                        About Us
                    </h1>
                    <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-700">
                        BookSwap is a platform where users can trade, sell, or donate books
                        with others in their community. It allows users to list books,
                        browse available books, interact with other users, and arrange book
                        exchanges or purchases.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#"
                            className="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
