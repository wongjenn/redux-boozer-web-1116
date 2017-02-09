import axios from 'axios'
const BASE_URL = "http://localhost:3000/api/v1"


export function fetchCocktails(){
  const cocktails = axios.get(`${BASE_URL}/cocktails`).then(response =>  response.data)
  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function addCocktail(newCocktail){
  const cocktail = axios.post(`${BASE_URL}/cocktails`, {cocktail: newCocktail} ).then ( response => response.data)
  return {
    type: 'ADD_COCKTAIL',
    payload: cocktail
  }
}

export function changeCocktail (id) {
    return {
    type: 'CHANGE_COCKTAIL',
    payload: id
  }
}
