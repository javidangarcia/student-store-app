import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({ product, addItemToCart, removeItemFromCart, shoppingCart }) {
  const productName = product.name;
  let productQuantity;
  if (shoppingCart && shoppingCart[productName]) {
    productQuantity = shoppingCart[productName].quantity;
  }
  return (
    <div className="product-card">
        <Link key={product.name} to={`/product/${product.id}`} className="product-link">
          <img src={product.image} alt="" />
        </Link>
        <div className="product-name-quantity">
          <p className="product-name">{product.name}</p>
          {productQuantity && <p className="product-quantity">{productQuantity}</p>}
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-buttons">
          <button className="add" onClick={() => {addItemToCart(product)} }><i className="material-icons">add</i></button>
          <button className="remove" onClick={() => removeItemFromCart(product)}><i className="material-icons">remove</i></button>
        </div>
    </div>
  )
}
