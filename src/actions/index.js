import axios from 'axios'
const BASE_URL = "http://localhost:3000/api/v1"

export function addCocktail(newCocktail){
  // const note = axios.post(`${BASE_URL}/cocktails`, {title: cocktailName, body: '', id: counter++ } ).then ( response => response.data)
  return {
    type: 'ADD_COCKTAIL',
    payload: newCocktail
  }
}

/*
export function addNote(noteTitle){
  const note = axios.post('http://localhost:3000/api/v1/notes', {title: noteTitle, body: '', id: counter++ } ).then ( response => response.data)
  return {
    type: 'ADD_NOTE',
    payload: note
  }
}
*/

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
