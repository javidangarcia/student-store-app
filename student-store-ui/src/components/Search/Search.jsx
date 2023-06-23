import * as React from "react"
import "./Search.css"

const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"]

export default function Search({ setSelectedCategory, searchInput, setSearchInput }) {
  return (
    <div className="search-filter-container">
        <div className="search-bar">
            <input  type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={ (event) => setSearchInput(event.target.value) }
            />
            <button><i className="material-icons">search</i></button>
        </div>
        <div className="filter">
            {
            categories.map( (category) => {
                return <button key={category.toLowerCase()} className="filter-options" onClick={ () => setSelectedCategory(category.toLowerCase()) }>{category}</button>
            })
            }
        </div>
    </div>
  )
}