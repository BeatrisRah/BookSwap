import OfferMessage from "./OfferMessage";

export default function OutComingMessage({message}) {

    return (
    <div className="flex justify-end mb-4">
        {message.tradeOfferDetails || message.buyOfferDetails ? 
        <OfferMessage message={message} isIncoming={false} /> :
        <div className="flex max-w-96 bg-blue-500 text-white rounded-lg p-3 gap-3">
            <p>{message.text}</p>
        </div>}
        
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
        </div>
    </div>
    );
}