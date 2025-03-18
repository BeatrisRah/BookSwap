import ErrorAlert from "../alerts/Error";

export default function BookForm({data:{error, pending, submitHandler, handleImageChange, book, bookId, imagePreview}}) {
    return (
        <div className="h-full bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto">
                {error && <ErrorAlert error={error} />}
                {pending && <div className="loader m-auto"></div>}
                <div className="flex justify-center px-6 py-12">
                    <form onSubmit={submitHandler} className="flex w-full justify-center px-6 py-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            >
                                <input
                                    type="file"
                                    name="file" id="file"
                                    className="sr-only"
                                    accept="image/png, image/jpeg"
                                    defaultValue={book.file}
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="file"
                                    className="relative flex h-full items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                    {imagePreview ? (
                                        <div>
                                            <img src={imagePreview} alt="image uploaded"></img>
                                            <span className="mt-2 block text-xl text-black">
                                                Click to change image
                                            </span>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="mb-2 block text-xl font-semibold text-black">
                                                Drop image here
                                            </span>
                                            <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                                Or
                                            </span>
                                            <span
                                                className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-black hover:bg-gray-500  hover:text-white">
                                                Browse
                                            </span>

                                        </div>
                                    )}

                                </label>
                            </div>
                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5  lg:rounded-l-none">
                                <h3 className="py-6 text-2xl text-center text-gray-800 dark:text-white">{bookId ? 'Edit' : 'Create'} a Book Offer!</h3>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="title"
                                        type="text"
                                        placeholder="The Lord of The Rings"
                                        name="title"
                                        defaultValue={book.title}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="author">
                                        Author
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="author"
                                        type="text"
                                        placeholder="J.R.R Tolkien"
                                        name="author"
                                        defaultValue={book.author}

                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="genre">
                                        Genre
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="genre"
                                        name="genre"
                                        defaultValue={book.genre}
                                    >
                                        <option value="fantasy">Fantasy</option>
                                        <option value="romance novel">Romance novel</option>
                                        <option value="thriller">Thriller</option>
                                        <option value="horror">Horror</option>
                                        <option value="mystery">Mystery</option>
                                        <option value="fiction">Fiction</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-6 mb-9 text-2xl text-center text-gray-800 dark:text-white"> </h3>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="condition">
                                        Condition
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="condition"
                                        name="condition"
                                        defaultValue={book.condition}
                                    >
                                        <option value="new">New</option>
                                        <option value="good">Good</option>
                                        <option value="damaged">Damaged</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="description"
                                        placeholder="Not my type of book..."
                                        name="description"
                                        defaultValue={book.description}

                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="price">
                                        Price
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="number"
                                        placeholder="10.99"
                                        name="price"
                                        defaultValue={book.price}
                                    />
                                </div>

                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled={pending}
                                    >
                                        Create
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}