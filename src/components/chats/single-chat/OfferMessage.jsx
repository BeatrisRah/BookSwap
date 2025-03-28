import { Link } from "react-router"

export default function OfferMessage({ message, isIncoming }) {

    if(message.buyOfferDetails){
        return (
            <div className={`flex flex-wrap w-2/6 rounded-lg p-3 gap-3 ${
                isIncoming ? 
                'bg-white text-gray-900' :
                'bg-blue-500 text-white'
            }`}>
                <p className="text-lg px-2">{message.text}</p>
                <Link className="mx-auto" to={`/books/${message.buyOfferDetails.id}/details`}>
                    <img src={message.buyOfferDetails.imageUrl} className="w-70 mb-4 rounded-md shadow-md" />
                    <h3 className="text-center text-lg">{message.buyOfferDetails.title}</h3>
                </Link>
            </div>
        )
    }


    return (
        <div className={`flex flex-wrap lg:w-4/5 xl:w-3/5 2xl:w-2/5 rounded-lg p-3 gap-3 ${
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
                        <img src={message.tradeOfferDetails?.offeredBook.imageUrl} className="w-10/12 sm:h-60 lg:h-70 object-fit m-auto rounded-md" />
                        <p className="text-2xl w-full text-center" >{message.tradeOfferDetails?.offeredBook.title}</p>
                    </div>
                </Link>
                <Link
                    className="w-1/2"
                    to={`/books/${message.tradeOfferDetails?.requestedBook.id}/details`}>
                    <div className="w-full">
                        <img src={message.tradeOfferDetails?.requestedBook.imageUrl} className="w-10/12 sm:h-60 lg:h-70 object-fit m-auto rounded-md" />
                        <p className="text-2xl w-full text-center" >{message.tradeOfferDetails?.requestedBook.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}