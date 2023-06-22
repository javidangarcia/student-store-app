import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"


export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <h2>Best Selling Products</h2>
      <ProductGrid products={props.products}/>
      <div className="about">
        <h3>About</h3>
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
      </div>
      <div className="contact">
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
