import * as React from "react";
import "./Purchases.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Purchases() {
    const [purchases, setPurchases] = useState([]);
    let orderID = 1;

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const url = "http://localhost:3001/store/purchases";
                const response = await axios.get(url);
                const data = response.data;
                setPurchases(data);
            } catch (error) {
                
            }
        };
        fetchPurchases();
    }, []);

    return (

        <div className="purchases">
            <div className="orders">
                {purchases.map((order) => (
                    <Link key={orderID} to={`/store/purchases/${orderID}`} className="order-link">
                        <div className="order" key={orderID++}>
                            <p>Order #{orderID}</p>
                            <p>Name: {order.name}</p>
                            <p>Email: {order.email}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    
    )
}
