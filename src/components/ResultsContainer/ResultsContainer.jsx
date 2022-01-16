import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultsContainer.css'
const ResultsContainer=({suggestedWords})=>{
  const suggestedNameJSX=suggestedWords.map(suggestedWord=>{
    return <NameCard key={suggestedWord} suggestedWord={suggestedWord}/>
  });
  return <div className="resultContainer">
    {suggestedNameJSX}
  </div>
}
export default ResultsContainer;