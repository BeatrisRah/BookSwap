
export default function OutComingMessage({message}) {
    // console.log(message);
    if(message.tradeOfferDetails){
        return (
        <div className="flex justify-end mb-4">
            <div className="flex flex-wrap w-2/5 bg-blue-500 text-white rounded-lg p-3 gap-3">
                <p className="text-2xl p-3" >{message.text}</p>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/2">
                        <img src={message.tradeOfferDetails?.offeredBook.imageUrl} className="w-10/12 h-80 object-fit m-auto rounded-md" />
                        <p className="text-2xl w-full text-center" >{message.tradeOfferDetails?.offeredBook.title}</p>
                    </div>
                    <div className="w-1/2">
                        <img src={message.tradeOfferDetails?.requestedBook.imageUrl} className="w-10/12 h-80 object-fit m-auto rounded-md" />
                        <p className="text-2xl w-full text-center" >{message.tradeOfferDetails?.requestedBook.title}</p>
                    </div>
                </div>
                <div>
                    <button>Decline</button>
                    <button>Accept</button>
                </div>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
            </div>
        </div>)
    }

    return (
    <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
            <p>Hi Alice! I'm good, just finished a great book. How about you?</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar" className="w-8 h-8 rounded-full" />
        </div>
    </div>
    );
}