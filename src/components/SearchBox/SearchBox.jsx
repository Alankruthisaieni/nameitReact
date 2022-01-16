import React from "react";
import './SearchBox.css'
const SearchBox=({handleInputChange})=>{
  return(
    <div className="search-container">
      <input onChange={(event)=> handleInputChange(event.target.value)} type="text" placeholder="Type keywords" className="searchInput" />
    </div>
  )
}
export default SearchBox;