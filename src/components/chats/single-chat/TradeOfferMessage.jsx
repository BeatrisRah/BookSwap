import { Link } from "react-router"

export default function TradeOfferMessage({ message, isIncoming }) {
    return (
        <div className={`flex flex-wrap w-2/5 rounded-lg p-3 gap-3 ${
            isIncoming ? 
            'bg-white text-gray-900' :
            'bg-blue-500 text-white'
        }`}>
            <p className="text-2xl p-3" >{message.text}</p>
            <div className="flex flex-wrap w-full">
                <Link
                    className="w-1/2"
                    to={`/books/${message.tradeOfferDetails?.offeredBook.id}/details`}>
                    <div className="w-full">
                        <img src={message.tradeOfferDetails?.offeredBook.imageUrl} className="w-10/12 h-80 object-fit m-auto rounded-md" />
                        <p className="text-2xl w-full text-center" >{message.tradeOfferDetails?.offeredBook.title}</p>
                    </div>
                </Link>
                <Link
                    className="w-1/2"
                    to={`/books/${message.tradeOfferDetails?.requestedBook.id}/details`}>
                    <div className="w-full">
                        <img src={message.tradeOfferDetails?.requestedBook.imageUrl} className="w-10/12 h-80 object-fit m-auto rounded-md" />
                        <p className="text-2xl w-full text-center" >{message.tradeOfferDetails?.requestedBook.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}