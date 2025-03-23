import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import App from './App'
import { AuthProvider } from './components/AuthProvider'

createRoot(document.getElementById('root')).render(
    <>
      <BrowserRouter>
        <AuthProvider>
        <App />
        </AuthProvider>  
      </BrowserRouter>
    </>
)
