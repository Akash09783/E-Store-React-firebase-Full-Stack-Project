/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import NoPage from "./pages/nopage/NoPage"
import MyState from "./context/data/MyState"
function App() {

  return (
    <>
    <MyState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  


    </MyState>
    
   
      
    </>
  )
}

export default App