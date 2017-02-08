import React from 'react';
import NavBar from './nav_bar';
import CocktailIndex from './cocktail_index';

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          < CocktailIndex />
        </div>

      </div>
    )
};
