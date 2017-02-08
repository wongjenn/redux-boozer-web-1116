import React from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

class CocktailsShow extends React.Component {
  render(){
    return(
      <div>
      cocktail detail
      </div>
    )
  }

}

function mapStateToProps (state){
  return {
    cocktails: state.cocktails
  }
}
export default connect (mapStateToProps)(CocktailsShow)
