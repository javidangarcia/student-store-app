import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({ isOpen, toggleSidebar, shoppingCart, checkoutForm, checkoutFormChange, checkoutFormSubmit, newestOrder }) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <button className="sidebar-button" onClick={toggleSidebar}>
        <i className={isOpen ? "material-icons md-48 arrow-open" : "material-icons md-48"}>arrow_forward</i>
      </button>
      <ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart}/>
      <CheckoutForm 
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          checkoutForm={checkoutForm}
          checkoutFormChange={checkoutFormChange}
          checkoutFormSubmit={checkoutFormSubmit}
          newestOrder={newestOrder}
      />
    </section>
  )
}
