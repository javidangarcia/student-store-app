import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import { useState } from "react"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const handleAddItemToCart = (productId) => {
    shoppingCart.push(productId);
    setShoppingCart(shoppingCart);
  }
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
