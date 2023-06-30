import * as React from "react"
import "./CheckoutForm.css"
import { useState } from "react";

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, checkoutFormChange, checkoutFormSubmit, newestOrder }) {
    let subTotal = 0.00;

    return (
        <div className={isOpen ? "checkout-form" : "hidden"}>
            <div className="checkout-fields">
                <input
                    className="checkout-form-input"
                    type="text" 
                    name="name"
                    placeholder="Name..."
                    value={checkoutForm.name}
                    onChange={(event) => checkoutFormChange(event.target.name, event.target.value)}
                />
                <input 
                    className="checkout-form-input" 
                    type="email" 
                    name="email" 
                    placeholder="Email Address..." 
                    value={checkoutForm.email} 
                    onChange={(event) => checkoutFormChange(event.target.name, event.target.value)}
                />
            </div>
            <div className="checkout-submit">
                <button className="checkout-button" onClick={(event) => checkoutFormSubmit()}>
                    Checkout
                </button>
            </div>
            {   
                Object.keys(newestOrder).length > 0 &&
                <div className="receipt">
                    <p className="receipt-name">Receipt</p>
                    <p>Showing receipt for {newestOrder.name} available at {newestOrder.email}:</p>
                    {Object.entries(newestOrder.shoppingCart).map( ([productName, productInfo]) => {
                        const price = productInfo.price.toFixed(2);
                        const quantity = productInfo.quantity;
                        const total = (price * quantity).toFixed(2);
                        subTotal += parseFloat(total);
                        return (
                            <p key={productName}>- {quantity} total {productName} purchased at a cost of ${price} for a total cost of ${total}.</p>
                        )
                    })}
                    <p>Before taxes, the subtotal was ${subTotal.toFixed(2)}.</p>
                    <p>After taxes and fees were applied, the total comes out to ${(subTotal + (subTotal * 0.09)).toFixed(2)}.</p>
                </div>
            }
        </div>
    )
}