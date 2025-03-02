import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen, shoppingCart }) {
    const isShoppingCartEmpty = Object.keys(shoppingCart).length === 0;
    let subTotal = 0.00;

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
                    const price = productInfo.price.toFixed(2);
                    const quantity = productInfo.quantity;
                    const total = (price * quantity).toFixed(2);
                    subTotal += parseFloat(total);
                    return (<div className="shopping-product" key={productName}>
                        <p>{productName}</p>
                        <p>{quantity}</p>
                        <p>${price}</p>
                        <p>${total}</p>
                    </div>)
                })
            }
            <div className={isShoppingCartEmpty ? "hidden" : "shopping-total"}>
                <p>Subtotal: ${subTotal.toFixed(2)}</p>
                <p>Taxes and Fees: ${(subTotal * 0.09).toFixed(2)}</p>
                <p>Total Cost: ${(subTotal + (subTotal * 0.09)).toFixed(2)}</p>
            </div>
            <div>

            </div>
        </div>    
    )
}