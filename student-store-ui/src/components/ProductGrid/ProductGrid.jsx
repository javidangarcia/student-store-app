import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
  const {products, category} = props;

  let filteredProducts;
  if (category === "all categories") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter( (product) => {return product.category === category} );
    console.log(filteredProducts);
  }

  return (
    <div className="product-grid">
      {
      
      filteredProducts.map( (product) => {
        return <ProductCard key={product.name} product={product}/>
      })

      }
    </div>
  )
}
