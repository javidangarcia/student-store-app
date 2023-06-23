import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen }) {
    return (
        <div className={isOpen ? "shopping-cart" : "shopping-cart hidden"}>
            <h1>Shopping Cart</h1>
            <p>No items added to cart yet. Start shopping now!</p>
        </div>    
    )
}