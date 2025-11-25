import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Componment/Footer/Footer.jsx'
import Navbar from './Componment/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer />
    <Navbar />
  </StrictMode>,
)
