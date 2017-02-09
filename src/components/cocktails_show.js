import React from 'react'
import { connect } from 'react-redux'

function CocktailsShow (props){
  return(
    <div>
    <h2></h2>
      {props.cocktail.name}
    </div>
  )
}

function mapStateToProps (state){
  const cocktail = state.cocktails.find( cocktail =>
  cocktail.id === state.currentCocktail) || {}

  return {
    cocktail: cocktail
  }
}
export default connect (mapStateToProps)(CocktailsShow)
