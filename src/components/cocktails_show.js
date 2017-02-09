import React from 'react'
import { connect } from 'react-redux'

function CocktailsShow (props){
  return props.cocktail.name === undefined ? (<div></div>) :
  (
    <div>
      <h2>{props.cocktail.name}</h2>
      <p>{props.cocktail.description}</p>
      <p>{props.cocktail.source}</p>
      <p>Instructions: {props.cocktail.instructions}</p>
      Proportions/Ingredients:
      <ul>
        {props.cocktail.proportions.map(proportion =>
        <li key={proportion.id}>{proportion.amount} of {proportion.ingredient_name}</li>)}
      </ul>
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
