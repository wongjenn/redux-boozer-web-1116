export default function currentCocktailReducer(state="", action){
  switch (action.type) {
    case 'CHANGE_COCKTAIL':
      return action.payload
    default:
      return state
  }
}
