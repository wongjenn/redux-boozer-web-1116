export function fetchCocktails(){
  // add your own cocktails here
  const cocktails = [{id: 1, name: 'Gin and Tonic'}, {id: 2, name: 'Old Fashioned'}, {id: 3, name: 'Negroni'}, {id: 4, name: 'Roy Rogers'}];

  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}
