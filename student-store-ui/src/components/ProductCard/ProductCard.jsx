import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
  return (
    <div className="product-card">
        <img src={props.product.image} alt="" />
        <p className="product-name">{props.product.name}</p>
        <p className="product-price">${props.product.price.toFixed(2)}</p>
    </div>
  )
}
