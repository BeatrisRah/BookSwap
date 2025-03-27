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
            <div className="w-4/6 bg-gray-200 m-auto p-4">
                {events.map(ev => <EventItem />)}
            </div>

        </div>
    );
}