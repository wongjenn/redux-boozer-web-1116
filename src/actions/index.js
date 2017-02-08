
export function fetchCocktails(){
  const defaultCocktails = [{id: 1, name: 'Gin and Tonic'}, {id: 2, name: 'Old Fashioned'}, {id: 3, name: 'Negroni'}, {id: 4, name: 'Roy Rogers'}];
  return {
    type: 'FETCH_COCKTAILS',
    payload: defaultCocktails
  }
}
export function changeCocktail (id) {
    return {
    type: 'CHANGE_COCKTAIL',
    payload: id
  }
}
