import * as React from "react"
import "./Search.css"

const categories = ["all categories", "clothing", "food", "accessories", "tech"]

export default function Search({ setSelectedCategory, searchInput, setSearchInput }) {
  return (
    <div className="search-filter-container">
        <div className="search-bar">
            <input  type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={ (event) => setSearchInput(event.target.value) }
            />
            <button><i class="material-icons">search</i></button>
        </div>
        <div className="filter">
            {
            categories.map( (category) => {
                return <button key={category} className="filter-options" onClick={ () => setSelectedCategory(category) }>{category}</button>
            })
            }
        </div>
    </div>
  )
}