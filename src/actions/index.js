import axios from 'axios'
const BASE_URL = "http://localhost:3000/api/v1"


export function fetchCocktails(){
  const cocktails = axios.get(`${BASE_URL}/cocktails`).then(response =>  response.data)
  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}
export function changeCocktail (id) {
    return {
    type: 'CHANGE_COCKTAIL',
    payload: id
  }
}
