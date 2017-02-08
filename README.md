## Redux Cocktails

Today, we'll be using Redux to build out an app to list out cocktails. We'll use the same 'Master/Detail' format that we did in lecture. We should have:

1. A component to render a NavBar and any children.
2. A List of All Cocktails
3. A Cocktail Detail page for each cocktail.

## Requirements

1. Create a reducer to respond to an action called 'FETCH_COCKTAILS'. This should return a new array representing the action's payload.
2. Create an action creator called `fetchCocktails` that returns an action and a payload representing a list of cocktails.
3. In our `index.js` file, create a new store using a rootReducer (hint: You'll need to create a `rootReducer` using combineReducers)
4. Once you create the store, wire it up to the neccessary components using `Provider`, `mapStateToProps`, and `connect`
5. Before rendering your app to the DOM, go ahead and dispatch your `fetchCocktails` action.

This is hard. It's supposed to be hard. Work together - you guys can do this!
