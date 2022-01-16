import React from 'react'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox'
import Header from './../Header/Header'
import './App.css'
const name=require('@rstacruz/startup-name-generator');
class App extends React.Component{
  state={
    headerText: "Name it!!",
    headerExpanded:true,
    suggestedWords:[]
  }
  
  handleInputChange=(inputText)=>{
    this.setState({
      headerExpanded:!inputText,
      suggestedWords:inputText?name(inputText):[]}
    )
    // console.log(this.state.headerExpanded)
  }
  render(){
    return(
      
      <div>
        <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
        <SearchBox handleInputChange={this.handleInputChange}/>
        <ResultsContainer suggestedWords={this.state.suggestedWords}/>
      </div>
    )
  }
}
export default App;