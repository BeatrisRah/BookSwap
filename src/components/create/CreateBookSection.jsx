export default function CreateBookSection() {
    const formSubmit = async (formData) => {
        const data = Object.fromEntries([...formData])
        const newForm = new FormData()
        newForm.append('file', data.file);
        newForm.append('upload_preset', 'react_preset');
        
        

        try{
            const res = await fetch('https://api.cloudinary.com/v1_1/dserynjly/image/upload', {
                method:'POST',
                body:newForm
            })
            const imageData = await res.json()
            console.log(imageData.secure_url);
            
            
        } catch(err){
            console.log(err);
            
        }

    }
   return (
    <div class="h-full bg-gray-100 dark:bg-gray-900">
        <div class="mx-auto">
            <div class="flex justify-center px-6 py-12">
                <form action={formSubmit} class="flex w-full justify-center px-6 py-12">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            >
                                <input type="file" name="file" id="file" class="sr-only" accept="image/png, image/jpeg" />
                                <label for="file"
                                    class="relative flex h-full items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                    <div>
                                        <span class="mb-2 block text-xl font-semibold text-black">
                                            Drop image here
                                        </span>
                                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span
                                            class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-black hover:bg-gray-500  hover:text-white">
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>
                        <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5  lg:rounded-l-none">
                            <h3 class="py-6 text-2xl text-center text-gray-800 dark:text-white">Create a Book Offer!</h3>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="title">
                                        Title
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="title"
                                        type="text"
                                        placeholder="The Lord of The Rings"
                                        name="title"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="author">
                                        Author
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="author"
                                        type="text"
                                        placeholder="J.R.R Tolkien"
                                        name="author"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="genre">
                                        Genre
                                    </label>
                                    <select
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="genre"
                                        name="genre"
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

                        <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="py-6 mb-9 text-2xl text-center text-gray-800 dark:text-white"> </h3>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="condition">
                                        Condition
                                    </label>
                                    <select
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="condition"
                                        name="condition"
                                    > 
                                    <option value="new">New</option>
                                    <option value="good">Good</option>
                                    <option value="damaged">Damaged</option>
                                    </select>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="description">
                                        Description
                                    </label>
                                    <textarea
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="description"
                                        placeholder="Not my type of book..."
                                        name="description"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="price">
                                        Price
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="price"
                                        type="number"
                                        placeholder="10.99"
                                        name="price"
                                    />
                                </div>
                                
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Create
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
   );
}