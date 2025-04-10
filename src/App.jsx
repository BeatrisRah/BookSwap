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
import AuthGuard from './guards/AuthGuard.jsx'
import GuestGuard from './guards/GuestGuard.jsx'
import NotFound from './components/not-found/NotFound.jsx'
import UserProfile from './components/profile/UserProfile.jsx'
import EventSection from './components/events/EventSection.jsx'
import EventsDetails from './components/events/EventDetails.jsx'
import EventCreate from './components/events/EventCreate/EventCreate.jsx'

export default function App() {    
    return (
        <>
        <Navigation />
        <div className="carousel relative mx-auto" style={{ 'maxWidth': '100%' }}>
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/books' element={<ProductList filter={{}} />} />
                <Route path='/books/:bookId/details' element={<ProductDetails />} />
                <Route path='/events' element={<EventSection />} />
                <Route path='/events/:eventId' element={<EventsDetails />} />

                <Route element={<GuestGuard />}>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />

                </Route>

                <Route element={<AuthGuard />}>
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/user' element={<UserProfile />} />
                    <Route path='/chats' element={<ChatsSection />} />
                    <Route path='/chats/:chatId' element={<ChatsSection />} />
                    <Route path='/books/create' element={<CreateSection />} />
                    <Route path='/books/:bookId/edit' element={<EditProduct />} />
                    <Route path='/books/:bookId/trade' element={<TradeSection />} />
                    <Route path='/events/create' element={<EventCreate />} />

                </Route>

                <Route path='/*' element={<NotFound />} />


            </Routes>

        </div>
        <Footer />
        </>
    );
}