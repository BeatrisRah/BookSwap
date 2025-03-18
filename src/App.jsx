import About from './components/About.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import CreateBookSection from './components/create/CreateBookSection.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import { Route, Routes } from 'react-router'
import ProductList from './components/catalog/ProductsSection.jsx'
import Logout from './components/auth/Logout.jsx'
import ProductDetails from './components/details/ProductDetails.jsx'



export default function App() {    
    return (
        <>
        <Navigation />
        <div className="carousel relative container mx-auto" style={{ 'maxWidth': '100%' }}>
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />

                <Route path='/books' element={<ProductList filter={{}} />} />
                <Route path='/books/create' element={<CreateBookSection />} />
                <Route path='/books/:bookId/details' element={<ProductDetails />} />
            </Routes>

        </div>
        <Footer />
        </>
    );
}