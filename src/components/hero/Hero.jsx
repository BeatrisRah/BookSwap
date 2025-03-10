import ProductList from "../catalog/ProductsSection";

function Hero() {
	return (
		<>
			<div className="relative w-full h-[420px] mb-15" id="home">
				<div className="absolute inset-0 opacity-70">
					<img src="https://img.freepik.com/free-photo/beautiful-arrangement-different-books_23-2148883798.jpg?t=st=1741551044~exp=1741554644~hmac=73fd586cc0efbe160dd41b60b3f6215be2887ec235ccd6da3ae9f4131300511b&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />

				</div>
				<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
					<div className="ml-1 sm:ml-10 md:ml-36 lg:ml-80 lg-4 md:mb-0 lg:w-1/2">
						<h1 className="text-black font-medium text-4xl md:text-5xl leading-tight mb-2">BookSwap</h1>
						<p className="font-regular text-gray-900 text-xl mb-8 mt-4">Sell, trade or donate your books!</p>
						<div className="flex flex-col w-full sm:w-auto sm:flex-row ">
							<a href="/books"
								className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-blue-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
								Browse Books
								<span className="ml-4">
									<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
									</svg>
								</span>
							</a>

							<a href="/register"
								className="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-blue-300 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
								Sign up
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="w-11/12 m-auto text-gray-900 text-center p-3 pb-16 border-b-2 border-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Find your next great read, declutter your shelves,<br /> or give books a second life—join our community of book lovers today!
            </p>

			
			<ProductList />
			
		</>
	);
}

export default Hero;
