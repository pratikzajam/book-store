import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/Login'
import PrivateRoute from './PrivateRoute.jsx'
import Main from './pages/Main.jsx';
import Cart from './pages/Cart.jsx';





function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/main" element={<PrivateRoute><Main /></PrivateRoute>} />  
      </Routes>


    </>
  )
}

export default App
