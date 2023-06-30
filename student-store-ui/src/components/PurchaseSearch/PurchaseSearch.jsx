import * as React from "react"
import "./PurchaseSearch.css"

export default function PurchaseSearch({ searchPurchaseInput, setSearchPurchaseInput }) {
  return (
    <div className="search-container">
        <div className="search-purchase-bar">
            <input  type="text"
                    placeholder="Search"
                    value={searchPurchaseInput}
                    onChange={ (event) => setSearchPurchaseInput(event.target.value) }
            />
            <button><i className="material-icons">search</i></button>
        </div>
    </div>
  )
}