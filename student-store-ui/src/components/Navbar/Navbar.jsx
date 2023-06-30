import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav id="Home" className="navbar">
      <a href="/#Home">Home</a>
      <a href="/#Products">Our Products</a>
      <a href="/store/purchases">Past Orders</a>
      <a href="/#About">About Us</a>
      <a href="/#Contact">Contact Us</a>
    </nav>
  )
}
