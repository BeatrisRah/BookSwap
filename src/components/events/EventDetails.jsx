import { Navigate, useParams } from "react-router";
import { useFecthOneEvent } from "../../api/eventsApi";
import Spinner from "../Spinner";

export default function EventsDetails() {
    const { eventId } = useParams()
    const [pending, event, error] = useFecthOneEvent(eventId)

    if(error) {
        <Navigate to='/events' />
    }
    

    return (
        <div className="w-full bg-[url(/Event_details_bg.png)] h-screen bg-cover bg-top">
            <h1 className="text-center text-3xl font-semibold mb-10 tracking-wider">{event.title}</h1>
            <div className="m-auto w-3/5 flex gap-3">
                <div>
                    <img src={event.imageUrl} className="rounded-md" />
                </div>
                <div className="w-1/2 border-2 border-gray-300 p-5 bg-white shadow-md rounded-md">
                    {pending && <Spinner />}
                    <h3 className="text-lg">Location:</h3>
                    <p className=" text-pink-500 mb-3">📍 {event.location}</p>

                    <h3 className="text-lg">Date:</h3>
                    <p className="text-xl mb-3">{event.date}</p>

                    <h3 className="text-lg">Description:</h3>
                    <p className="mb-3 text-gray-600 text-sm">{event.description}</p>
                    
                    <h3 className="text-lg mb-2">Additinal details:</h3>
                    <ul className="p-2 mb-4">
                        {event.additinal?.map(a => (
                            <li 
                            key={a}
                            className="text-gray-700  p-2 rounded-md flex items-center gap-2">
                            <svg className="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 5.636C17.8001 5.07212 17.0676 4.77963 16.3287 4.75855C15.5976 4.73769 15.2321 4.72726 15.147 4.70581C14.9649 4.65988 15.0937 4.71324 14.9325 4.61693C14.8571 4.57194 14.5913 4.32084 14.0595 3.81864C13.5222 3.31114 12.7974 3 12 3C11.2026 3 10.4778 3.31113 9.94047 3.81863C9.40876 4.32082 9.14287 4.57195 9.06753 4.61694C8.90626 4.71325 9.0351 4.65988 8.85296 4.70581C8.76788 4.72727 8.40232 4.73769 7.67121 4.75855C6.93238 4.77963 6.19986 5.07211 5.63597 5.636C5.07207 6.1999 4.77959 6.93243 4.75852 7.67126C4.73766 8.40235 4.72724 8.7679 4.70578 8.85299C4.65985 9.03512 4.71322 8.90628 4.61691 9.06755C4.57192 9.14289 4.32082 9.40876 3.81862 9.94048C3.31113 10.4778 3 11.2026 3 12C3 12.7974 3.31113 13.5222 3.81862 14.0595C4.32082 14.5912 4.57192 14.8571 4.61691 14.9324C4.71322 15.0937 4.65985 14.9649 4.70578 15.147C4.72724 15.2321 4.73766 15.5976 4.75852 16.3287C4.77959 17.0676 5.07207 17.8001 5.63597 18.364C6.19986 18.9279 6.93238 19.2204 7.67121 19.2414C8.40225 19.2623 8.76788 19.2727 8.85296 19.2942C9.0351 19.3401 8.90626 19.2868 9.06753 19.3831C9.14287 19.4281 9.40874 19.6792 9.94047 20.1814C10.4778 20.6889 11.2026 21 12 21C12.7974 21 13.5222 20.6889 14.0595 20.1814C14.5912 19.6792 14.8571 19.4281 14.9325 19.3831C15.0937 19.2868 14.9649 19.3401 15.147 19.2942C15.2321 19.2727 15.5976 19.2623 16.3287 19.2414C17.0676 19.2204 17.8001 18.9279 18.364 18.364C18.9278 17.8001 19.2203 17.0676 19.2414 16.3288C19.2623 15.5977 19.2727 15.2321 19.2942 15.147C19.3401 14.9649 19.2867 15.0937 19.383 14.9325C19.428 14.8571 19.6792 14.5912 20.1814 14.0595C20.6889 13.5222 21 12.7974 21 12C21 11.2026 20.6889 10.4778 20.1814 9.94045C19.6792 9.40876 19.428 9.14286 19.383 9.06752C19.2867 8.90625 19.3401 9.0351 19.2942 8.85296C19.2727 8.76787 19.2623 8.40232 19.2414 7.67121C19.2203 6.9324 18.9278 6.19989 18.364 5.636Z" stroke="#f45777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            {a}</li>
                        ))}
                    </ul>

                    <div className="bg-rose-400 rounded-md mx-auto p-2 w-1/3 hover:bg-rose-500">
                        <button className="text-white w-full" >I'm Interested!
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}