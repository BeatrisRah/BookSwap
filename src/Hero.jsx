import ProductList from "./components/ProductsSection";

function Hero() {
	return (
		<>
			<div className="relative w-full h-[320px] mb-15" id="home">
				<div className="absolute inset-0 opacity-70">
					<img src="https://img.freepik.com/free-photo/beautiful-arrangement-different-books_23-2148883798.jpg?t=st=1741551044~exp=1741554644~hmac=73fd586cc0efbe160dd41b60b3f6215be2887ec235ccd6da3ae9f4131300511b&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />

				</div>
				<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
					<div className="ml-1 sm:ml-10 md:ml-36 lg:ml-80 lg-4 md:mb-0 lg:w-1/2">
						<h1 className="text-black font-medium text-4xl md:text-5xl leading-tight mb-2">BookSwap</h1>
						<p className="font-regular text-gray-900 text-xl mb-8 mt-4">Sell, trade or donate your books!</p>
						<a href="#contactUs"
							className="px-6 py-3 bg-blue-400 text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">
							Explore Books</a>
					</div>
				</div>
			</div>

			<ProductList />

			
		</>
	);
}

export default Hero;
