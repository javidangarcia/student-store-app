import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search"
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home(props) {
  const [selectedCategory, setSelectedCategory] = useState("all categories");
  const [searchInput, setSearchInput] = useState("");
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
    <div className="home">
      <Hero />
      <Search setSelectedCategory={setSelectedCategory} searchInput={searchInput} setSearchInput={setSearchInput}/>
      <ProductGrid products={products} selectedCategory={selectedCategory} searchInput={searchInput}/>
      <div id="About" className="about">
        <h3>About</h3>
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
      </div>
      <div id="Contact" className="contact">
        <h4>Contact Us</h4>
        <p>Email: code@path.org</p>
        <p>Phone: 1-800-CODEPATH</p>
        <p>Address: 123 Fake Street, San Francisco, CA</p>
      </div>
      <div className="footer">
        <h5>Categories</h5>
        <h5>Company</h5>
        <h5>Support</h5>
        <h5>Account</h5>
        <h5>Socials</h5>
        <h5>Our App</h5>
      </div>
    </div>
  )
}
