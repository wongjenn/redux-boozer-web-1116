import React from 'react';
import {connect} from 'react-redux';

function CocktailsShow (props) {
  return (<div>{props.cocktail.name}</div>);
}

function mapStateToProps(state, ownProps){
  const cocktail = state.cocktails.find(cocktail => cocktail.id == ownProps.params.id);
  return {
    cocktail: cocktail
  }
}

export default connect(mapStateToProps)(CocktailsShow)
