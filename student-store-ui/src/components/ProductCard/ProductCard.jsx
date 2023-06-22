import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
  return (
    <div className="product-card">
        <img src={props.product.image} alt="" />
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>
    </div>
  )
}
