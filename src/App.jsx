import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/Home' element={<Home />}/>
    </Routes>
    </>
    
  )
}

export default App
