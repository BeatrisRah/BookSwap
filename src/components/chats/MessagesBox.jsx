import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import IncomingMessage from "./single-chat/IncomingMessage"
import OutComingMessage from "./single-chat/OutcomingMessage"
import { useSendMessageHandler } from "../../api/chatApi"
import ErrorAlert from "../alerts/Error"

export default function MessagesBox({messages, currentChatDetails}) {
    const {user} = useAuth()
    const [newMessage, setNewMessage] = useState('')
    const contactName = currentChatDetails?.users.filter(u => u !== user.email)
    const [sendMessage, pending, error] = useSendMessageHandler(currentChatDetails?.id)

    const handleSendMessage = async () => {
        await sendMessage(newMessage, user.email)
    }
    
    return (
    <div className="flex-1">
    {/* Chat Header */}
        <header className="bg-white p-4 text-gray-700">
            <h1 className="text-2xl font-semibold">{contactName}</h1>
        </header>
        {/* Chat Messages */}
        <div className="h-screen overflow-y-auto p-4 pb-36 bg-gray-200">
            {error && <ErrorAlert error={error} />}
            {/* Incoming Message */}
            {messages.map(message => message?.senderId === user.email ? 
                <OutComingMessage key={message.id} message={message} /> :
                <IncomingMessage key={message.id} message={message} />
            )}
            
        </div>
        {/* Chat Input */}
        <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
            <div className="flex items-center">
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.currentTarget.value)}    />
                <button 
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
                    onClick={handleSendMessage}
                    disabled={pending}
                    >Send</button>
            </div>
        </footer>
    </div>
    )
}