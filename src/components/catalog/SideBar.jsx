
const sidebarLinks  = [
    {name:'All', genre:'all'},
    {name:'Fantasy', genre:'fantasy'},
    {name:'Romance Novel', genre:'romance-novel'},
    {name:'Thriller', genre:'thriller'},
    {name:'Horror', genre:'horror'},
    {name:'Mystery', genre:'mystery'},
    {name:'Fiction', genre:'fiction'},


]

export default function Sidebar({handleFilterChange}) {
    return (
        <div className="flex flex-col items-center w-41 h-full overflow-hidden text-gray-700 bg-gray-100 rounded">
            <a className="flex items-center w-full px-3 mt-3" href="#">
                <svg className="h-8 w-8 text-gray-900"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <span className="ml-2 text-sm font-bold">Books</span>
            </a>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                    
                    {sidebarLinks.map(link => 
                    <button 
                        key={link.name}
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                        onClick={() => handleFilterChange(link.genre, 'genre')}
                        > 
                        {link.name}
                    </button>)}

                </div>
            </div>
            
        </div>
    );
}