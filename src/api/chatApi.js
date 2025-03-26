import { addDoc, arrayUnion, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore"
import { useEffect, useReducer, useState } from "react"
import { db } from "../../firebaseinit"
import { useNavigate } from "react-router"
import fetchReducer from "../reducers/fetchReducer"
import { ACTION_TYPES } from "../reducers/postActionTypes"

export function useChatRoomCreate(offeringUser, offeringUserBook,  owner, ownerBook, type){
    const [state, dispach] = useReducer(fetchReducer.reducer, {
        pending: false,
        error: null
    })
    const navigate = useNavigate()

    const onTradeHandler = async() => {
        try{
            if(!offeringUserBook && type ==='TRADE') throw new Error('Please select a book!')
            
            dispach({type:ACTION_TYPES.FETCH_START})
            const chatRef = collection(db, 'chats');


            const q = query(chatRef,  where('users', 'array-contains', offeringUser))
            const querySnapShot  = await getDocs(q)

            const matchingChats = querySnapShot.docs.filter(doc => {
                const users = doc.data().users;
                return users.includes(owner); 
            });
            

            let chatId = null;

            if(matchingChats.length === 0){
                //if no chat exists
                const bookOffersIds = [
                    ...(type === 'TRADE' ? [offeringUserBook?.id] : []), 
                    ownerBook.id
                ];
                
                const newChatRef = await addDoc(chatRef, {
                    users:[offeringUser, owner],
                    bookOffersIds
                })
                chatId = newChatRef.id

            } else{
                //if it does check if the offer was alredy made
                const currentbooks = matchingChats[0].data().bookOffersIds;

                if(currentbooks.includes(offeringUserBook?.id) || currentbooks.includes(ownerBook.id)){
                    throw new Error('This offer was alredy made!')
                }

                chatId = matchingChats[0].id;

                const newBookArray = [
                    ...(type === 'TRADE' ? [offeringUserBook?.id] : []), 
                    ownerBook.id
                ];
                
                await updateDoc(matchingChats[0].ref, {
                    bookOffersIds: arrayUnion(...newBookArray)})
            }

            
            await createOfferMessage(type, chatId, {offeringUser, offeringUserBook, ownerBook})

            dispach({type:ACTION_TYPES.FETCH_FINAL})
            navigate(`/chats/${chatId}`)

        } catch(err){
            dispach({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
        }
    }
    return [onTradeHandler, state.pending, state.error]
}


async function createOfferMessage(type, chatId,  {offeringUser, offeringUserBook, ownerBook}){
    const messagesRef = collection(db, "chats", chatId, "messages");

    if(type === 'TRADE'){
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

    } else if(type === 'BUY'){
        await addDoc(messagesRef, {
            senderId: offeringUser,
            text: `Hey, I’d like to ${ownerBook.price > 0 ? 'buy' : 'get'} your "${ownerBook.title}" book. Waiting to hear from you!`,
            buyOfferDetails: {
                id: ownerBook.id,
                title: ownerBook.title,
                imageUrl: ownerBook.imageUrl
            },
            createdAt: serverTimestamp(),
            isRead: false
        });
    }

}

export function useFetchChats(userEmail, chatId){
    const [chatIdDefault, setChatIdDefault] = useState(null)
    const [state, dispach] = useReducer(fetchReducer.reducer, {
        pending: true,
        data: null
    })

    useEffect(() => {
        let isCancelled = false;
        
        const getAll = async () => {
            const chatsRef = collection(db, 'chats')
            const q = query(chatsRef, where('users', 'array-contains', userEmail))

            const chatsDocs = await getDocs(q)

            if(chatsDocs.empty){
                dispach({type:ACTION_TYPES.FETCH_SUCCESS, data:[]})
                return;
            }

            const chats = chatsDocs.docs.map(chatDoc => ({id:chatDoc.id, ...chatDoc.data()}))
            dispach({type:ACTION_TYPES.FETCH_SUCCESS, data:chats})
            if(chatId){
                setChatIdDefault(chatId)
            } else{
                setChatIdDefault(chats[0].id)
            }
        }

        if(!isCancelled){
            getAll()
        }
        return () => {
            isCancelled = true;
        }
    }, [userEmail,chatId])

    return [state.pending, state.data, chatIdDefault]
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
    const [state, dispach] = useReducer(fetchReducer.reducer, {
        pending: false,
        error:null
    })

    const sendMessage = async (newMessageText, userEmail) => {
        if(!newMessageText.trim()) return;

        const messageRef = collection(db, 'chats', chatId, 'messages');

        try{
            dispach({type:ACTION_TYPES.FETCH_START})
            await addDoc(messageRef, {
                text: newMessageText,
                senderId: userEmail, 
                isRead: false,
                createdAt:serverTimestamp()
            })

        } catch(err){
            dispach({type:ACTION_TYPES.FETCH_ERROR, error:err.message})
        } finally {
            dispach({type:ACTION_TYPES.FETCH_FINAL})
        }
    }

    return [sendMessage, state.pending, state.error]
}