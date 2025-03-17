import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'


createRoot(document.getElementById('root')).render(
    <>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>  
    </>
)
