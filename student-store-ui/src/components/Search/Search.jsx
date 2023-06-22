import * as React from "react"
import "./Search.css"

export default function Search(props) {
  return (
    <div className="search-filter-container">
        <div className="search-bar">
            <input type="text" name="search" placeholder="Search"/>
            <button><i class="fa fa-search"></i></button>
        </div>
        <div className="filter">
            <p className="filter-options">All Categories</p>
            <p className="filter-options">Clothing</p>
            <p className="filter-options">Food</p>
            <p className="filter-options">Accessories</p>
            <p className="filter-options">Tech</p>
        </div>
    </div>
  )
}
