import { Link, useParams } from "react-router";
import { useFetchChats, useFetchMessages } from "../../api/chatApi";
import { useAuth } from "../../contexts/AuthContext";
import MessagesBox from "./MessagesBox";

export default function ChatsSection() {
    const {user} = useAuth()
    const {chatId} = useParams()

    
    const [pending, chats, defaultchatId] = useFetchChats(user.email, chatId)
    const [messages] = useFetchMessages(defaultchatId)
    const currentChatDetails = chats.find(chat => chat.id === defaultchatId)
        
    
    return (
        <div className="flex h-[55rem] no-scrollbar overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/5 bg-white border-r border-gray-300">
                {/* Sidebar Header */}
                <header className="p-4 border-b rounded-md border-gray-300 flex justify-between items-center bg-blue-600 text-white">
                    <h1 className="text-2xl font-semibold">Chat Web</h1>
                    <div className="relative">
                        <button id="menuButton" className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
                            </svg>
                        </button>
                        {/* Menu Dropdown */}
                        <div id="menuDropdown" className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                            <ul className="py-2 px-3">
                                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a></li>
                                <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a></li>
                                {/* Add more menu options here */}
                            </ul>
                        </div>
                    </div>
                </header>
                {/* Contact List */}
                <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                    {pending && <div className="loader m-auto"></div>}
                    {chats.map(c => 
                    <Link 
                    to={`/chats/${c.id}`} 
                    className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    key={c.id}>
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                            <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-12 h-12 rounded-full" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{c?.users.filter(u => u !== user.email)}</h2>
                        </div>
                    </Link>)}
                    
                    
                    
                </div>
            </div>
            {/* Main Chat Area */}
            <MessagesBox messages={messages} currentChatDetails={currentChatDetails} />
        </div>


    );
}