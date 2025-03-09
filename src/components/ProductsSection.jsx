export default function ProductList() {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                    <div className="w-full container mx-auto flex flex-wrap items-center md:justify-center lg:justify-between mt-0 px-2 py-3 ">
                        <a
                            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                            href="#"
                        >
                            Recently Added
                        </a>

                        <div className="flex items-center" id="store-nav-content">
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
                                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                </svg>
                            </a>

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
                    <a className="p-8 max-w-sm border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://loremflickr.com/800/600/girl" className="shadow rounded-lg overflow-hidden border" />
                        <div className="mt-8">
                            <h4 className="font-bold text-xl">Exercises</h4>
                            <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                            </p>
                            <div className="mt-5">
                                <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                            </div>
                        </div>
                    </a>

                    <a className="p-8 max-w-sm border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://loremflickr.com/800/600/girl" className="shadow rounded-lg overflow-hidden border" />
                        <div className="mt-8">
                            <h4 className="font-bold text-xl">Exercises</h4>
                            <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                            </p>
                            <div className="mt-5">
                                <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                            </div>
                        </div>
                    </a>

                    <a className="p-8 max-w-sm border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://loremflickr.com/800/600/girl" className="shadow rounded-lg overflow-hidden border" />
                        <div className="mt-8">
                            <h4 className="font-bold text-xl">Exercises</h4>
                            <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                            </p>
                            <div className="mt-5">
                                <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                            </div>
                        </div>
                    </a>

                    <a className="p-8 max-w-sm border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                        href="#">
                        <img src="https://loremflickr.com/800/600/girl" className="shadow rounded-lg overflow-hidden border" />
                        <div className="mt-8">
                            <h4 className="font-bold text-xl">Exercises</h4>
                            <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                            </p>
                            <div className="mt-5">
                                <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                            </div>
                        </div>
                    </a>

                    
                </div>
            </div>
        </section>
    );
}
