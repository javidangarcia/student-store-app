import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen, shoppingCart }) {
    const isShoppingCartEmpty = Object.keys(shoppingCart).length === 0;
    let shoppingCartTotal = 0.00;

    return (
        <div className={isOpen ? "shopping-cart" : "shopping-cart hidden"}>
            <h1>Shopping Cart</h1>
            <p className={isShoppingCartEmpty ? "" : "hidden"}>You have not added any items to cart yet.</p>
            <div className={isShoppingCartEmpty ? "hidden" : "shopping-categories"}>
                <p>Name</p>
                <p>Quantity</p>
                <p>Unit Price</p>
                <p>Cost</p>
            </div>
            {
                Object.entries(shoppingCart).map( ([productName, productInfo]) => {
                    shoppingCartTotal += productInfo.price * productInfo.quantity;
                    return (<div className="shopping-product" key={productName}>
                        <p>{productName}</p>
                        <p>{productInfo.quantity}</p>
                        <p>${productInfo.price.toFixed(2)}</p>
                        <p>${(productInfo.price * productInfo.quantity).toFixed(2)}</p>
                    </div>)
                })
            }
            <div className={isShoppingCartEmpty ? "hidden" : "shopping-total"}>
                <p>Total Cost: {shoppingCartTotal.toFixed(2)}</p>
            </div>
            <div>

            </div>
        </div>    
    )
}