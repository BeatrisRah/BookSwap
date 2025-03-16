import About from './components/About.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import CreateBookSection from './components/create/CreateBookSection.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import { Route, Routes } from 'react-router'



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

                <Route path='/books/create' element={<CreateBookSection />} />
            </Routes>

        </div>
        <Footer />
        </>
    );
}