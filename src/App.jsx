import About from './components/About.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import { Route, Routes } from 'react-router'
import ProductList from './components/catalog/ProductsSection.jsx'
import Logout from './components/auth/Logout.jsx'
import ProductDetails from './components/details/ProductDetails.jsx'
import EditProduct from './components/create-or-update/Edit.jsx'
import CreateSection from './components/create-or-update/CreateSection.jsx'
import ChatsSection from './components/chats/ChatsSection.jsx'
import TradeSection from './components/trade/TradeSection.jsx'

export default function App() {    
    return (
        <>
        <Navigation />
        <div className="carousel relative mx-auto" style={{ 'maxWidth': '100%' }}>
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/chats' element={<ChatsSection />} />
                <Route path='/chats/:chatId' element={<ChatsSection />} />


                <Route path='/books' element={<ProductList filter={{}} />} />
                <Route path='/books/create' element={<CreateSection />} />
                <Route path='/books/:bookId/details' element={<ProductDetails />} />
                <Route path='/books/:bookId/edit' element={<EditProduct />} />
                <Route path='/books/:bookId/trade' element={<TradeSection />} />
            </Routes>

        </div>
        <Footer />
        </>
    );
}