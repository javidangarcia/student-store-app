import * as React from "react"
import "./Search.css"

const categories = ["all categories", "clothing", "food", "accessories", "tech"]

export default function Search(props) {
  const {categoryClick} = props;

  return (
    <div className="search-filter-container">
        <div className="search-bar">
            <input type="text" name="search" placeholder="Search"/>
            <button><i className="fa fa-search"></i></button>
        </div>
        <div className="filter">
            {
            categories.map( (category) => {
                return <button key={category} className="filter-options" onClick={() => categoryClick(category)}>{category}</button>
            })
            }
        </div>
    </div>
  )
}
