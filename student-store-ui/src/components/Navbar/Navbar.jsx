import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/#Products">Our Products</a>
      <a href="/#About">About Us</a>
      <a href="/#Contact">Contact Us</a>
    </nav>
  )
}
