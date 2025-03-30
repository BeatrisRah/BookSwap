import { Link } from "react-router";

export default function EventItem({event}) {
    return (
        <div className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs overflow-hidden bg-white border-2 border-gray-400 rounded-lg shadow-lg p-2">
            <div className="p-2 sm:w-1/2">
                <img className="rounded object-cover w-full sm:h-80 h-60" src={event.imageUrl} alt='event' />
            </div>
            <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
                <div>
                    <Link to={`/events/${event.id}`} className="block sm:mt-2 text-2xl font-semibold text-gray-700 hover:text-gray-600 hover:underline">
                        {event.title}</Link>
                    <h3 className="m-2 text-pink-500">📍 {event.location}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {event.description}
                    </p>
                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <span className="mx-1 text-md text-gray-500">{event.date}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}