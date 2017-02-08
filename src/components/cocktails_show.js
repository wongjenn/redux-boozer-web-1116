import React from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

class CocktailsShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  render(){
    const current = this.props.cocktails.filter(cocktail => cocktail.id == this.props.currentCocktail)[0]

    return(
      <div>
      <h2></h2>
        { current === undefined ? "" : current.name}
      </div>
    )
  }

}

function mapStateToProps (state){
  return {
    cocktails: state.cocktails,
    currentCocktail: state.currentCocktail
  }
}
export default connect (mapStateToProps)(CocktailsShow)
