import React from "react";
import './NameCard.css'
const nameCheapURL='https://www.namecheap.com/domains/registration/results/?domain=';
const NameCard=({suggestedWord})=>{
  return(
    <a target="_blank" className="card-link" href={`${nameCheapURL}${suggestedWord}`}>
      <div className="suggested-name-card">
        <p className="suggested-name">{suggestedWord}</p>
      </div>
    </a>
    
  )
}
export default NameCard;