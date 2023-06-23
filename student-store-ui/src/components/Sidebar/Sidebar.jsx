import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <button onClick={toggleSidebar}>
        <i className={isOpen ? "material-icons md-48 arrow-open" : "material-icons md-48"}>arrow_forward</i>
      </button>
      <ShoppingCart isOpen={isOpen}/>
    </section>
  )
}
