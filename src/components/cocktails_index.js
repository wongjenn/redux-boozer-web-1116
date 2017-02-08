import React from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { fetchCocktails } from '../actions'
import { changeCocktail } from '../actions'

class CocktailsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchCocktails()
  }

  handleClick(event){
    event.preventDefault()
    var id = event.currentTarget.id
    this.props.changeCocktail(id)
  }

  render(){
    const cocktails = this.props.cocktails
    return(
      <div>
        <h2>All Cocktails</h2>
        <ul>
          { cocktails.map((cocktail) => <li onClick={ this.handleClick.bind(this) } key={cocktail.id} id={cocktail.id}><a href="">{cocktail.name}</a></li> )}
        </ul>
      </div>)
  }

}

function mapStateToProps (state){
  return {
    cocktails: state.cocktails,
    currentCocktail: state.currentCocktail
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCocktails: function(){
      let action = fetchCocktails()
      dispatch( action )
    },
    changeCocktail: function (id) {
      let action = changeCocktail(id)
      dispatch( action )
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CocktailsIndex)
