import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
        <Link key={product.name} to={`/product/${product.id}`} className="product-link">
          <img src={product.image} alt="" />
        </Link>
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div>
          <button><i class="material-icons">add</i></button>
          <button><i class="material-icons">remove</i></button>
        </div>
    </div>
  )
}
