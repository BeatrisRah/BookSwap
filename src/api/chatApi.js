import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebaseinit"
import { useNavigate } from "react-router"

export function useChatRoomCreate(offeringUser, offeringUserBook,  owner, ownerBook){
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const onTradeHandler = async() => {
        

        try{
            if(!offeringUserBook) throw new Error('Please select a book!')
            
            setPending(true)
            const chatRef = collection(db, 'chats');
            const newChatRef = await addDoc(chatRef, {
                users:[offeringUser, owner],
                offerDetails:{

                    offeredBook: {

                        id: offeringUserBook.id, 
                        owner: offeringUser},

                    requestedBook:{

                        id: ownerBook.id, 
                        owner: owner
                    }
                }
            })

            const messagesRef = collection(db, "chats", newChatRef.id, "messages");

            await addDoc(messagesRef, {
                senderId: offeringUser,
                text: `Hey, I’d like to trade my "${offeringUserBook.title}" for your "${ownerBook.title}". Let me know!`,
                tradeOfferDetails: {
                    offeredBook: {
                        id: offeringUserBook.id,
                        title: offeringUserBook.title,
                        imageUrl: offeringUserBook.imageUrl
                },
                    requestedBook: {
                        id: ownerBook.id,
                        title: ownerBook.title,
                        imageUrl: ownerBook.imageUrl
                }
                },
                createdAt: serverTimestamp(),
                isRead: false
            });

            setError(false)
            navigate(`/chats/${newChatRef.id}`)

        } catch(err){
            setError(err.message)
        } finally{
            setPending(false)
        }
    }
    return [onTradeHandler, pending, error]
}