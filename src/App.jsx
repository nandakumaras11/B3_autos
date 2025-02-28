import { useState } from 'react'
import './App.css'
import { AllRoutes } from './Routes'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import BookHSRP from './Pages/BookHSRP/BookHSRP'

function App() {


  return (
    <>
      <Menu />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
