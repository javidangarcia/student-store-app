import * as React from "react"
import "./CheckoutForm.css"
import { useState } from "react";

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, checkoutFormChange, checkoutFormSubmit }) {

    return (
        <div className={isOpen ? "checkout-form" : "hidden"}>
            <div className="checkout-fields">
                <input
                    className="checkout-form-input"
                    type="text" 
                    name="name"
                    placeholder="Student Name"
                    value={checkoutForm.name}
                    onChange={(event) => checkoutFormChange(event.target.name, event.target.value)}
                />
                <input 
                    className="checkout-form-input" 
                    type="email" 
                    name="email" 
                    placeholder="student@codepath.org" 
                    value={checkoutForm.email} 
                    onChange={(event) => checkoutFormChange(event.target.name, event.target.value)}
                />
            </div>
            <div className="checkout-submit">
                <button className="checkout-button" onClick={(event) => checkoutFormSubmit()}>
                    Checkout
                </button>
            </div>
        </div>
    )
}