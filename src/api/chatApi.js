import { addDoc, collection, getDoc, getDocs, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
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
                text: `Hey, I’d like to trade my "${offeringUserBook.title}" book for your "${ownerBook.title}" book. Waiting to hear from you!`,
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

export function useFetchChats(userEmail, chatId){
    const [chatsState, setChats] = useState(null)
    const [pending, setPending] = useState(true)
    const [chatIdDefault, setChatIdDefault] = useState(null)

    useEffect(() => {
        const getAll = async () => {
            const chatsRef = collection(db, 'chats')
            const q = query(chatsRef, where('users', 'array-contains', userEmail))

            const chatsDocs = await getDocs(q)

            if(chatsDocs.empty){
                setChats([])
                setPending(false)
                return;
            }

            const chats = chatsDocs.docs.map(chatDoc => ({id:chatDoc.id, ...chatDoc.data()}))
            setChats(chats)
            setPending(false)
            if(chatId){
                setChatIdDefault(chatId)
            } else{
                setChatIdDefault(chats[0].id)
            }
        }
        getAll()
    }, [userEmail,chatId])

    return [pending, chatsState, chatIdDefault]
}

export function useFetchMessages(chatId){
    const [messages, setMessages] = useState(null)
    

    useEffect(() => {
        if(!chatId) return;

        const messageRef = collection(db, 'chats', chatId, 'messages')

        const q = query(messageRef, orderBy('createdAt', 'asc'));

        const unsubscribe  = onSnapshot(q, (snapshot) => {
            let newMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(newMessages)
        });



        return () => unsubscribe()
    }, [chatId])

    return [messages]
}

export function useSendMessageHandler(chatId){
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    const sendMessage = async (newMessageText, userEmail) => {
        if(!newMessageText.trim()) return;

        const messageRef = collection(db, 'chats', chatId, 'messages');

        try{
            setPending(true)
            await addDoc(messageRef, {
                text: newMessageText,
                senderId: userEmail, 
                isRead: false,
                createdAt:serverTimestamp()
            })
            setError(false)

        } catch(err){
            setError(err.message)
        } finally {
            setPending(false)
        }
    }

    return [sendMessage, pending, error]
}