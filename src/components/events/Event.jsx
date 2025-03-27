export default function EventItem({event}) {
    return (
        <div className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs overflow-hidden bg-white border-2 border-gray-400 rounded-lg shadow-lg p-2">
            <div className="p-2 sm:w-1/2">
                <img className="rounded object-cover w-full sm:h-80 h-60" src={event.imageUrl} alt='event' />
            </div>
            <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
                <div>
                    <a href="#" className="block sm:mt-2 text-2xl font-semibold text-gray-700 hover:text-gray-600 hover:underline">
                        {event.title}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {event.description}
                    </p>
                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <span className="mx-1 text-md text-gray-500">{event.date}</span>
                        <span className="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#f2f2f2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <circle cx={18} cy={5} r={3} />
                                <circle cx={6} cy={12} r={3} />
                                <circle cx={18} cy={19} r={3} />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}