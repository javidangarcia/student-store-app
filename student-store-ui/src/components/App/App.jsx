import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const url = "https://codepath-store-api.herokuapp.com/store";
        const response = await axios.get(url);
        const data = response.data
        setProducts(data.products)
      } catch(error) {
        console.log(error)
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Home products={products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
