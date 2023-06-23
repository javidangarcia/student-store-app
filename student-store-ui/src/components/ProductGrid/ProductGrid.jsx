import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ products, selectedCategory, searchInput }) {

  let filteredProducts;
  if (selectedCategory === "all categories") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter( (product) => {return product.category === selectedCategory} );
  }

  if (searchInput) {
    filteredProducts = filteredProducts.filter( (product) => {return product.name.toLowerCase().includes(searchInput.toLowerCase())})
  }

  return (
    <div id="Products" className="product-grid">
      <h2>Best Selling Products</h2>
      <div class="grid">
        {
        
        filteredProducts.map( (product) => {
          return <ProductCard key={product.name} product={product}/>
        })

        }
      </div>
    </div>
  )
}