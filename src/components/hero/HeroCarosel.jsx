import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const images = [
    "/book_bazar_1.jpg",
    "/book_bazar_2.jpg",
    "/book_bazar_3.jpg"
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-10/12 lg:w-4/5 flex-wrap lg:flex-nowrap mx-auto flex gap-5 mb-80 p-2">
            <div className="relative lg:w-2/3 overflow-hidden rounded-lg shadow-lg">
                <div className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
                    ))}
                </div>

                {/* Buttons */}
                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="lg:w-3/5 flex flex-col justify-center bg-gray-50 rounded-lg p-4">
                <div className="sm:w-full md:w-3/4 p-4 h-2/3 flex flex-col md:mb-4 justify-items-center justify-center">
                    <h1 className="text-5xl font-bold text-[#0b89a1] mb-2 tracking-wider">Book Bazaar Events</h1>
                    <p>Join our Book Bazaar Events—a paradise for book lovers! Whether you want to buy, sell, trade, or donate books, our events bring the community together to celebrate the joy of reading.</p>
                </div>
                <div className="lg:w-3/4 p-4 bg-[#0b89a1] md:h-25 rounded-2xl inline-flex items-center gap-2">
                    <svg className="w-7" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#ffffff"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>

                    <h1 className="text-gray-100 text-2xl">Find a bazaar near you!</h1>
                    <Link className="text-white border-b-2 text-2xl" to='/events' >View Events</Link>
                </div>
            </div>
        </div>
    );
}