import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './components/Navigation.jsx'
import Hero from './Hero.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Navigation />
      <div className="carousel relative container mx-auto" style={{'maxWidth': '1600px'}}>
        <Hero />
      
      </div>
      <Footer />
    </>
)
