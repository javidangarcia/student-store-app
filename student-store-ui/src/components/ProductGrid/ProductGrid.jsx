import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {

      props.products.map( (product) => {
        console.log(product);
        return <ProductCard product={product}/>
      })

      }
    </div>
  )
}
