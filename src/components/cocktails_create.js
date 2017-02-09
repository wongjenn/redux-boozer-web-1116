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

      }]
    }
  }

  handleInputChange(event){
    var key = event.target.name
    var value = event.target.value
  this.setState({
    key: value
  })
  }

  handleSubmit(event){
  event.preventDefault()
  this.props.addCocktail( this.state.note )
  this.setState({note: ''})
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
