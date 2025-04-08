import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Turnirlar from './components/Turnirlar-section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Main />
    <Turnirlar />
  </StrictMode>,
)
