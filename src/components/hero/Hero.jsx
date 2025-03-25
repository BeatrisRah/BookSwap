import { Link } from "react-router";
import ProductList from "../catalog/ProductsSection";
import HeroCarousel from "./HeroCarosel";

function Hero() {
	return (
		<>
			<div className="relative w-full h-[820px] mb-80" id="home">
				<div className="absolute inset-0">
					<img src="/1.png" alt="Background Image" className="object-cover w-full h-full" />
				</div>
				<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
					<div className="ml-1 sm:ml-10 md:ml-36 lg:ml-80 lg-4 md:mb-0 lg:w-1/2">
						<h1 className="text-black font-bold text-4xl md:text-5xl leading-tight mb-2">BookSwap</h1>
						<p className="font-regular text-gray-900 text-xl mb-8 mt-4">Sell, trade or donate your books!</p>
						<div className="flex flex-col w-full sm:w-auto sm:flex-row ">
							<Link to="/books"
								className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-white text-gray-800 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
								Browse Books
								<span className="ml-4">
									<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
									</svg>
								</span>
							</Link>

							<Link to="/register"
								className="flex items-center justify-center w-full px-4 py-4 text-sm font-bold leading-6 capitalize text-gray-800 duration-100 transform border-2 rounded-sm cursor-pointer border-white focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>

			<p className="w-11/12 m-auto text-gray-500 text-center p-3 border-gray-400 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
				Find your next great read, declutter your shelves, or give books a second life<br /> —join our community of book lovers today!
			</p>

			<section className="flex m-auto w-3/5 mt-5 mb-48 items-center">
				<img src='/ilustration_reading.jpg' className="h-10/12 w-1/2" />
				<div className="w-1/2 h-10/12 p-20 flex flex-wrap gap-8">
					<div className="inline-flex items-center gap-2">
						<svg className="w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.364 13.1214C15.2876 14.045 15.4831 15.4211 14.9504 16.5362L16.4853 18.0711C16.8758 18.4616 16.8758 19.0948 16.4853 19.4853C16.0948 19.8758 15.4616 19.8758 15.0711 19.4853L13.5361 17.9504C12.421 18.4831 11.045 18.2876 10.1213 17.364C8.94975 16.1924 8.94975 14.2929 10.1213 13.1214C11.2929 11.9498 13.1924 11.9498 14.364 13.1214ZM12.9497 15.9498C13.3403 15.5593 13.3403 14.9261 12.9497 14.5356C12.5592 14.145 11.9261 14.145 11.5355 14.5356C11.145 14.9261 11.145 15.5593 11.5355 15.9498C11.9261 16.3403 12.5592 16.3403 12.9497 15.9498Z" fill="#60a5fa" /> <path d="M8 5H16V7H8V5Z" fill="#60a5fa" /> <path d="M16 9H8V11H16V9Z" fill="#60a5fa" /> <path fillRule="evenodd" clipRule="evenodd" d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V4ZM7 3H17C17.5523 3 18 3.44772 18 4V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V4C6 3.44772 6.44771 3 7 3Z" fill="#60a5fa" /> </g></svg>
						<h1 className="text-2xl font-semibold text-blue-400">Browse Books</h1>
					</div>
					<div className="inline-flex items-center gap-2">
						<svg className="w-12" fill="#60a5fa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#60a5fa" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z" /></g></svg>
						<h1 className="text-2xl font-semibold text-blue-400">Sell or Donate</h1>
					</div>
					<div className="inline-flex items-center gap-2">
						<svg className="w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16 6C14.3432 6 13 7.34315 13 9C13 10.6569 14.3432 12 16 12C17.6569 12 19 10.6569 19 9C19 7.34315 17.6569 6 16 6ZM11 9C11 6.23858 13.2386 4 16 4C18.7614 4 21 6.23858 21 9C21 10.3193 20.489 11.5193 19.6542 12.4128C21.4951 13.0124 22.9176 14.1993 23.8264 15.5329C24.1374 15.9893 24.0195 16.6114 23.5631 16.9224C23.1068 17.2334 22.4846 17.1155 22.1736 16.6591C21.1979 15.2273 19.4178 14 17 14C13.166 14 11 17.0742 11 19C11 19.5523 10.5523 20 10 20C9.44773 20 9.00001 19.5523 9.00001 19C9.00001 18.308 9.15848 17.57 9.46082 16.8425C9.38379 16.7931 9.3123 16.7323 9.24889 16.6602C8.42804 15.7262 7.15417 15 5.50001 15C3.84585 15 2.57199 15.7262 1.75114 16.6602C1.38655 17.075 0.754692 17.1157 0.339855 16.7511C-0.0749807 16.3865 -0.115709 15.7547 0.248886 15.3398C0.809035 14.7025 1.51784 14.1364 2.35725 13.7207C1.51989 12.9035 1.00001 11.7625 1.00001 10.5C1.00001 8.01472 3.01473 6 5.50001 6C7.98529 6 10 8.01472 10 10.5C10 11.7625 9.48013 12.9035 8.64278 13.7207C9.36518 14.0785 9.99085 14.5476 10.5083 15.0777C11.152 14.2659 11.9886 13.5382 12.9922 12.9945C11.7822 12.0819 11 10.6323 11 9ZM3.00001 10.5C3.00001 9.11929 4.1193 8 5.50001 8C6.88072 8 8.00001 9.11929 8.00001 10.5C8.00001 11.8807 6.88072 13 5.50001 13C4.1193 13 3.00001 11.8807 3.00001 10.5Z" fill="#60a5fa" /> </g></svg>
						<h1 className="text-2xl font-semibold text-blue-400">Join the Community</h1>
					</div>
				</div>
			</section>

			<section className="bg-gray-100 py-12 mb-70 sm:py-16 lg:py-20 xl:py-24">
				<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p className="text-sm font-bold uppercase tracking-widest text-gray-700">How It Works?</p>
						<h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Selling & Trading Books Made Easy
						</h2>

					</div>
					<ul className="mx-auto mt-12 grid w-10/12 grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-5">
						<li className="flex-start group relative flex lg:flex-col">
							<svg className="w-15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <circle style={{ fill: 'none', stroke: '#000000', strokeWidth: 2, strokeMiterlimit: 10 }} cx={14} cy={11} r={6} /> <path style={{ fill: 'none', stroke: '#000000', strokeWidth: 2, strokeMiterlimit: 10 }} d="M5,26c0-4.971,4.029-9,9-9 c1.864,0,3.596,0.567,5.032,1.537" /> <circle style={{ fill: 'none', stroke: '#000000', strokeWidth: 2, strokeMiterlimit: 10 }} cx={24} cy={24} r={7} /> <line style={{ fill: 'none', stroke: '#000000', strokeWidth: 2, strokeMiterlimit: 10 }} x1={24} y1={28} x2={24} y2={20} /> <line style={{ fill: 'none', stroke: '#000000', strokeWidth: 2, strokeMiterlimit: 10 }} x1={20} y1={24} x2={28} y2={24} /> </g></svg>
							<div className="ml-6 lg:ml-0 lg:mt-8">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Create an Account
								</h3>
								<h4 className="mt-2 text-base text-gray-700">Sign up for free and set up your profile.</h4>
							</div>
						</li>

						<li className="flex-start group relative flex lg:flex-col">
							<svg className="w-15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 16V3M12 3L16 7.375M12 3L8 7.375" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>

							<div className="ml-6 lg:ml-0 lg:mt-8">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									List Your Book
								</h3>
								<h4 className="mt-2 text-base text-gray-700">Upload book details, set a price, or mark it as available for donation.</h4>
							</div>
						</li>

						<li className="flex-start group relative flex lg:flex-col">
							<svg className="w-15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#1C274C" strokeWidth="1.5" /> </g></svg>

							<div className="ml-6 lg:ml-0 lg:mt-7">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Connect with Buyers & Traders
								</h3>
								<h4 className="mt-2 text-base text-gray-700">Chat securely with potential buyers or traders.</h4>
							</div>
						</li>

						<li className="flex-start group relative flex lg:flex-col">
							<svg className="w-17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.50626 15.2647C7.61657 15.6639 8.02965 15.8982 8.4289 15.7879C8.82816 15.6776 9.06241 15.2645 8.9521 14.8652L7.50626 15.2647ZM6.07692 7.27442L6.79984 7.0747V7.0747L6.07692 7.27442ZM4.7037 5.91995L4.50319 6.64265L4.7037 5.91995ZM3.20051 4.72457C2.80138 4.61383 2.38804 4.84762 2.2773 5.24675C2.16656 5.64589 2.40035 6.05923 2.79949 6.16997L3.20051 4.72457ZM20.1886 15.7254C20.5895 15.6213 20.8301 15.2118 20.7259 14.8109C20.6217 14.41 20.2123 14.1695 19.8114 14.2737L20.1886 15.7254ZM10.1978 17.5588C10.5074 18.6795 9.82778 19.8618 8.62389 20.1747L9.00118 21.6265C10.9782 21.1127 12.1863 19.1239 11.6436 17.1594L10.1978 17.5588ZM8.62389 20.1747C7.41216 20.4896 6.19622 19.7863 5.88401 18.6562L4.43817 19.0556C4.97829 21.0107 7.03196 22.1383 9.00118 21.6265L8.62389 20.1747ZM5.88401 18.6562C5.57441 17.5355 6.254 16.3532 7.4579 16.0403L7.08061 14.5885C5.10356 15.1023 3.89544 17.0911 4.43817 19.0556L5.88401 18.6562ZM7.4579 16.0403C8.66962 15.7254 9.88556 16.4287 10.1978 17.5588L11.6436 17.1594C11.1035 15.2043 9.04982 14.0768 7.08061 14.5885L7.4579 16.0403ZM8.9521 14.8652L6.79984 7.0747L5.354 7.47414L7.50626 15.2647L8.9521 14.8652ZM4.90421 5.19725L3.20051 4.72457L2.79949 6.16997L4.50319 6.64265L4.90421 5.19725ZM6.79984 7.0747C6.54671 6.15847 5.8211 5.45164 4.90421 5.19725L4.50319 6.64265C4.92878 6.76073 5.24573 7.08223 5.354 7.47414L6.79984 7.0747ZM11.1093 18.085L20.1886 15.7254L19.8114 14.2737L10.732 16.6332L11.1093 18.085Z" fill="#1C274C"></path> <path d="M19.1647 6.2358C18.6797 4.48023 18.4372 3.60244 17.7242 3.20319C17.0113 2.80394 16.1062 3.03915 14.2962 3.50955L12.3763 4.00849C10.5662 4.47889 9.66119 4.71409 9.24954 5.40562C8.8379 6.09714 9.0804 6.97492 9.56541 8.73049L10.0798 10.5926C10.5648 12.3481 10.8073 13.2259 11.5203 13.6252C12.2333 14.0244 13.1384 13.7892 14.9484 13.3188L16.8683 12.8199C18.6784 12.3495 19.5834 12.1143 19.995 11.4227C20.2212 11.0429 20.2499 10.6069 20.1495 10" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
							<div className="ml-6 lg:ml-0 lg:mt-5">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Ship or Meet Up
								</h3>
								<h4 className="mt-2 text-base text-gray-700">Choose a delivery method or arrange a local pickup.</h4>
							</div>
						</li>

						<li className="flex-start group relative flex lg:flex-col">
							<svg className="w-17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9.5" stroke="#222222" strokeLinecap="round"></circle> <path d="M9.83494 13.25C10.0544 13.63 10.37 13.9456 10.75 14.1651C11.13 14.3845 11.5612 14.5 12 14.5C12.4388 14.5 12.87 14.3845 13.25 14.1651C13.63 13.9456 13.9456 13.63 14.1651 13.25" stroke="#222222" strokeLinecap="round"></path> <rect x="7" y="8" width="3" height="2" rx="1" fill="#222222"></rect> <rect x="14" y="8" width="3" height="2" rx="1" fill="#222222"></rect> </g></svg>
							<div className="ml-6 lg:ml-0 lg:mt-5">
								<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
									Enjoy & Repeat!
								</h3>
								<h4 className="mt-2 text-base text-gray-700">Find new books while giving your old ones a second home.</h4>
							</div>
						</li>

					</ul>
				</div>
			</section>

			<HeroCarousel />


			<h2 className="flex items-center text-lg font-semibold gap-4 w-11/12 m-auto">
				<span className="flex-1 border-t border-gray-400"></span>
				<span className="text-center text-3xl font-bold text-gray-700 tracking-wider">Our Newest Additions</span>

				<span className="flex-1 border-t border-gray-400"></span>
			</h2>

			<ProductList filter={{ latest: true }} />

		</>
	);
}

export default Hero;
