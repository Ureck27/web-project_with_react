import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componment/Navbar/Navbar'
import Slider from './Componment/Slider/Slider'
import Shared from './Componment/Shared/Shared'
import Moviecard from './Componment/moviecard/Moviecard.jsx'
function App() {

  return (
         <>
          <Navbar />
          <Slider />
          <Shared />
      

         </>
  )
}

export default App
