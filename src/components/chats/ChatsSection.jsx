import { Link, useParams } from "react-router";
import { useFetchChats, useFetchMessages } from "../../api/chatApi";
import { useAuth } from "../../contexts/AuthContext";
import MessagesBox from "./MessagesBox";

export default function ChatsSection() {
    const {user} = useAuth()
    const {chatId} = useParams()

    
    const [pending, chats, defaultchatId] = useFetchChats(user.email, chatId)
    const [messages] = useFetchMessages(defaultchatId)
    const currentChatDetails = messages ? chats.find(chat => chat.id === defaultchatId) : null;
    

    const mainChatArea = chats?.length > 0 ? 
    <MessagesBox messages={messages} currentChatDetails={currentChatDetails} />:
    <div className="m-auto bg-[url(/empy_messages_bg.png)] w-11/12 h-full bg-cover bg-center flex justify-center items-center">
        <h1 className="text-3xl text-gray-100 font-bold">No messages yet!</h1>
    </div>
    
    return (
        <div className="flex h-[55rem] no-scrollbar overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/5 bg-white border-r border-gray-300">
                {/* Sidebar Header */}
                <header className="p-4 border-b rounded-md border-gray-300 flex justify-between items-center bg-blue-500 text-white">
                    <h1 className="text-2xl font-semibold">Chat Web</h1>
                </header>
                {/* Contact List */}
                <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                    {pending && <div className="loader m-auto"></div>}
                    
                    {chats?.length > 0 ? 
                    chats.map(c => 
                        <Link 
                        to={`/chats/${c.id}`} 
                        className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                        key={c.id}>
                            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                                <img src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="User Avatar" className="w-12 h-12 rounded-full" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{c.users?.filter(u => u !== user.email)}</h2>
                            </div>
                        </Link>) : 
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold" >No chats...</h1>
                    </div>}
                    
                    
                    
                </div>
            </div>
            {/* Main Chat Area */}

            {pending ? 
            <div className="loader m-auto"></div>:
            mainChatArea}
            
        </div>


    );
}