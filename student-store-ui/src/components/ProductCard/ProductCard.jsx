import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({ product, addItemToCart, removeItemFromCart }) {
  return (
    <div className="product-card">
        <Link key={product.name} to={`/product/${product.id}`} className="product-link">
          <img src={product.image} alt="" />
        </Link>
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-buttons">
          <button className="add" onClick={() => addItemToCart(product)}><i className="material-icons">add</i></button>
          <button className="remove" onClick={() => removeItemFromCart(product)}><i className="material-icons">remove</i></button>
        </div>
    </div>
  )
}
