import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './components/navigation/Navigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About.jsx'
import Register from './components/register/Register.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
      <Navigation />
      <div className="carousel relative container mx-auto" style={{'maxWidth': '100%'}}>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      
      </div>
      <Footer />
    </BrowserRouter>
      
    </>
)
