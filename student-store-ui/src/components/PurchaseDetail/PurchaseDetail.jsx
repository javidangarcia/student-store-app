import * as React from "react";
import "./PurchaseDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PurchaseDetail(props) {
    const { orderID } = useParams();
    const [purchase, setPurchase] = useState({});
    let subTotal = 0.00;

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const url = `http://localhost:3001/store/purchases/${orderID}`;
                const response = await axios.get(url);
                const data = response.data;
                setPurchase(data);
            } catch (error) {
                
            }
        };
        fetchPurchases();
    }, []);

    return (

        <div className="purchase-detail">
            <p>Order ID: {orderID}</p>
            <p>Name: {purchase.name}</p>
            <p>Email: {purchase.email}</p>
            {
                purchase.shoppingCart && Object.entries(purchase.shoppingCart).map(([productName, productDetails]) => {
                    const price = productDetails.price.toFixed(2);
                    const quantity = productDetails.quantity;
                    const total = (price * quantity).toFixed(2);
                    subTotal += parseFloat(total);
                    return (<p key={productName}>- {purchase.name} purchased {productDetails.quantity} <strong>{productName}</strong> at ${productDetails.price.toFixed(2)} each.</p>)
                })
            }
            <p>Subtotal: ${subTotal.toFixed(2)}</p>
            <p>Taxes and Fees: ${(subTotal * 0.09).toFixed(2)}</p>
            <p>Total Cost: ${(subTotal + (subTotal * 0.09)).toFixed(2)}</p>
        </div>
    
    )
}
