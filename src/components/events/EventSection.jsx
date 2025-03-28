import { Link } from "react-router";
import { useFetchEvents } from "../../api/eventsApi";
import { useAuth } from "../../contexts/AuthContext";
import EventItem from "./Event";

export default function EventSection() {
    const {user} = useAuth()
    const [pending, events] = useFetchEvents()

    const isAdmin = user?.uid === import.meta.env.VITE_ADMIN_ID
    

    return (
        <div className="w-full p-4">
            <div className="mb-13">
                <h2 className="text-center text-lg text-blue-400">Our Latest</h2>
                <h1 className="text-center text-4xl font-bold text-blue-400">Book Events</h1>
            </div>
            {pending && <div className="loader m-auto"></div>}
            <div className="3xl:w-5/6 flex flex-wrap gap-3 justify-center m-auto p-5 mb-10">
                {events.map(ev => <EventItem key={ev.id} event={ev} />)}
            </div>
            {isAdmin && 
            <div className="flex gap-4 mx-auto justify-center">
                <Link to='/events/create' className="px-6 py-2 min-w-[120px] text-center text-white bg-blue-600 border border-violet-600 rounded active:text-violet-500 hover:bg-blue-500  focus:outline-none focus:ring">
                    Add new
                </Link>
            </div>}

        </div>
    );
}