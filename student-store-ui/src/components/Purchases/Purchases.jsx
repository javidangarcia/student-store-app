import * as React from "react";
import "./Purchases.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PurchaseSearch from "../PurchaseSearch/PurchaseSearch";

export default function Purchases({ searchPurchaseInput, setSearchPurchaseInput }) {
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

    let filteredPurchases = [...purchases];

    if (searchPurchaseInput) {
        filteredPurchases = filteredPurchases.filter( (purchase) => {
          return purchase.name.toLowerCase()
            .includes(searchPurchaseInput.toLowerCase())
        })
    }


    return (

        <div className="purchases">
            <PurchaseSearch searchPurchaseInput={searchPurchaseInput} setSearchPurchaseInput={setSearchPurchaseInput}/>
            <div className="orders">
                {filteredPurchases.map((order) => (
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
