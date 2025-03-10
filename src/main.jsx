import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './components/navigation/Navigation.jsx'
import Hero from './components/hero/Hero.jsx'
import Footer from './components/footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
      <Navigation />
      <div className="carousel relative container mx-auto" style={{'maxWidth': '100%'}}>
        <Routes>
          <Route path='/' element={<Hero />} />

        </Routes>
      
      </div>
      <Footer />
    </BrowserRouter>
      
    </>
)
