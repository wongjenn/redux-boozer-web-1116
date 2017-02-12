import React from 'react'
import { connect } from 'react-redux'

function CocktailsShow (props){
  return props.cocktail.name === undefined ? (<div></div>) :
  (
    <div>
      <h2>{props.cocktail.name}</h2>
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
