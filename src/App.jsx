import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import Product from './Component/Product'

const App = () => {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/product' element={<Product/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
