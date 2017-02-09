import React from 'react'
import { connect } from 'react-redux'
import { addCocktail } from '../actions'

class CocktailsCreate extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: '',
      instructions: '',
      source: '',
      proportions: [{
        amount: "",
        ingredient_name: ""
      }]
    }
    this.baseState = this.state
  }

  handleInputChange(event){
    var key = event.target.name
    var value = event.target.value
    this.setState({
      [key]: value
    })
  }

  handleProportionChange(event){
    var key = event.target.name
    var value = event.target.value
    this.setState({proportions: Object.assign({},
      this.state.proportions, {[key]: value})
    })
  }


  handleSubmit(event){
    event.preventDefault()
    debugger
    this.props.addCocktail(this.state)
    this.setState(this.baseState)
  }

  render(){
  return (
    <div>
      <h3>Add a Cocktail</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Name</label>
        <input name ="name" type='text' onChange={this.handleInputChange.bind(this)} value={this.state.name}/>
        <label>Description</label>
        <input name ="description" type='text' onChange={this.handleInputChange.bind(this)} value={this.state.description}/>
        <label>Instructions</label>
        <input name ="instructions" type='text' onChange={this.handleInputChange.bind(this)} value={this.state.instructions}/>
        <label>Source</label>
        <input name ="source" type='text' onChange={this.handleInputChange.bind(this)} value={this.state.source}/>
        <label>amount</label>
        <input name = "amount" type='text' onChange={this.handleProportionChange.bind(this)}
        value={this.state.amount}/>
        <label>Ingredients:</label>
        <input name = "ingredient_name" type='text' onChange={this.handleProportionChange.bind(this)}
        value={this.state.ingredient_name}/>

        <input type='submit' />
      </form>
    </div>)
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addCocktail: function(newCocktail){
      let action = addCocktail( newCocktail )
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps)( CocktailsCreate )
