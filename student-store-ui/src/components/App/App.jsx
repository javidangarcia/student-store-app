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
  const [shoppingCart, setShoppingCart] = useState({});
  const [checkoutForm, setCheckoutForm] = useState({
    "name": "",
    "email": "",
    "shoppingCart": {}
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  function addItemToCart(product) {
    const productName = product.name;
    const productPrice = product.price;
    if (productName in shoppingCart) {
      const newShoppingCart = { ...shoppingCart, [productName]: {price: productPrice, quantity: shoppingCart[productName].quantity + 1} };
      setShoppingCart(newShoppingCart);
    } else {
      const newShoppingCart = { ...shoppingCart, [productName]: {price: productPrice, quantity: 1} };
      setShoppingCart(newShoppingCart);
    }

  }

  function removeItemFromCart(product) {
    const productName = product.name;
    const productPrice = product.price;
    if (productName in shoppingCart) {

      if (shoppingCart[productName].quantity === 1) {
        const newShoppingCart = { ...shoppingCart }
        delete newShoppingCart[productName];
        setShoppingCart(newShoppingCart);
      } else {
        const newShoppingCart = { ...shoppingCart, [productName]: {price: productPrice, quantity: shoppingCart[productName].quantity - 1} };
        setShoppingCart(newShoppingCart);
      }

    }

  }

  function checkoutFormChange(name, value) {
    let newCheckoutForm = { ...checkoutForm };
    newCheckoutForm[name] = value;
    setCheckoutForm(newCheckoutForm);
  }

  function resetShoppingCart() {
    setCheckoutForm({
      "name": "",
      "email": "",
      "shoppingCart": {}
    });
    setShoppingCart({});
  }

  function checkoutFormSubmit() {
    const currShoppingCart = {...shoppingCart};
    checkoutForm["shoppingCart"] = currShoppingCart;

    resetShoppingCart();
  }
  
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} shoppingCart={shoppingCart} checkoutForm={checkoutForm} checkoutFormChange={checkoutFormChange} checkoutFormSubmit={checkoutFormSubmit}/>
          <Routes>
            <Route path="/" element={<Home addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
