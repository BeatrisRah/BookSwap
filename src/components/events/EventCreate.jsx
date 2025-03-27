import { Navigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useCreateEvent } from "../../api/eventsApi";
import ErrorAlert from "../alerts/Error";


export default function EventCreate() {
    const { user } = useAuth()
    const [state, dispatch, handleSubmit, pending, error] = useCreateEvent()
    const [inputValue, setInputValue] = useState('')
    
    const handleDateChange = (e) => {
        const date = new Date(e.target.value);
        const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${date.getFullYear()}`;
        dispatch({ type: "SET_DATE", data: formattedDate });
    };

    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        dispatch({ type: "SET_FILE", data: file });
    };

    if (user.uid !== import.meta.env.VITE_ADMIN_ID) {
        return <Navigate to='/404' />
    }
    return (
        <>
        {error && <ErrorAlert error={error} />}
        <div className="mx-auto w-10/12 mt-10 mb-40 border-2 border-blue-400 rounded-lg">
            <div className="mt-10 text-center text-4xl font-bold">Create Event</div>
            <form onSubmit={handleSubmit} className="p-8">
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label
                        htmlFor="event-title"
                        className="font-bold"
                        >Title</label>
                        <input 
                        type="Name" 
                        name="title"
                        id="event-title"
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" 
                        placeholder="Event Title" 
                        onChange={(e) => {
                            dispatch({ type: "SET_TITLE", data: e.target.value })
                        }}/>
                    </div>
                    <div className="w-1/2">
                    <label
                    htmlFor="event-date"
                    className="font-bold"
                    >Date</label>
                    <input 
                    id="event-date"
                    type="date" 
                    name="date" 
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" 
                    onChange={handleDateChange}
                    />
                    </div>
                </div>
                <div className="my-6 inline-flex gap-4 w-full">
                        <div className="w-1/2">
                            <label htmlFor="photobutton" className="font-bold">Event Photo</label>
                            <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
                                <input 
                                name="imageUrl"
                                id="photobutton" 
                                type="file" 
                                accept="image/png, image/jpeg" 
                                className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" 
                                onChange={handleFileChange}/>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="event-location" className="font-bold">Location</label>
                            <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
                                <input 
                                name="location"
                                id="event-location" 
                                type="text" 
                                className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                                onChange={(e) => {
                                    dispatch({ type: "SET_LOCATION", data: e.target.value })
                                }}
                                />

                            </div>
                        </div>

                </div>
                <div>
                    <label htmlFor="text" className="font-bold">Description</label>
                    <textarea 
                    name="description" 
                    id="text" 
                    cols={30} 
                    rows={10} 
                    className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500" 
                    placeholder="Event description..."
                    onChange={(e) =>
                        dispatch({ type: "SET_DESCRIPTION", data: e.target.value })
                    } />
                </div>
                <div className="w-1/2 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-bold">Additional Details List</h2>
                    <p className="text-gray-400 italic mb-4">Optinal</p>
                    <div className="flex gap-2 mb-4">
                        <input
                        type="text"
                        name="additinal"
                        className="flex-1 p-2 border rounded-md"
                        placeholder="Enter item..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                        onClick={() => {
                            if (inputValue.trim() !== "") {
                                dispatch({ type: "ADD_ITEM", data: inputValue });
                                setInputValue("");
                            }
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        type="button">
                        Add
                        </button>
                    </div>

                    <ul className="list-disc pl-5">
                    {state.additinal?.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{item}</span>
                        <button
                        type="button"
                        onClick={() =>
                            dispatch({ type: "REMOVE_ITEM", data: index })
                        }
                        className="px-2 py-1 text-red-500 hover:text-red-700">
                        ✖
                        </button>
                    </li>
                    ))}
                    </ul>
                </div>
                <div className="text-center mt-10">
                <button 
                    className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
                    type="submit"
                    disabled={pending}
                    >
                        Create Event
                    </button>
                </div>
            </form>
        </div>
        </>

    );
}