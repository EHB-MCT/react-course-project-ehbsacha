import backgroundImage from '../img/backgroundImage.jpg';
import PrewiewBlock from './PreviewBlock';
import FilterSystem from './FilterSystem';
import React, { useState, useEffect } from 'react';
import { recipeService } from '../services/apiService';

function Filter() {

  // recipes are stored here
  const [recipes, setRecipes] = useState([]);

  // Updating variables
  const [query, setQuery] = useState(['pasta', 'carrot']);
  const [typeList, setTypes] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [intolerances, setIntolerances] = useState([]);

  // fullUrl items get updated
  var extraVariables = `query=${query.toString()}&intolerances=${intolerances.toString()}&type=${typeFilter}`;

  // Previous api
  // https://recepten-liese-c.herokuapp.com/recipes

  useEffect(() => {
    recipeService.complexSearchFetch(extraVariables)
      .then((data) => setRecipes(data.results))
      .then(console.log(recipes))
  }, []);

  useEffect(() => {
    //call function when something change in state
    updateFetch();
  }, [typeFilter, intolerances])

  function updateFetch() {
    // setRecipes([]);
    recipeService.complexSearchFetch(extraVariables)
      .then((data) => setRecipes(data.results))
      .then(console.log(recipes))
  }

  return (
    <div>
      <div className="filterHeader">
        <img src={backgroundImage} alt="" />
      </div>
      <p className="title">Op deze pagina kunt u filteren</p>
      <div className="filterContent">
        <FilterSystem

          // Recipes
          recipes={recipes}

          // The funcion and variables to set types
          setTypes={setTypes}
          typeList={typeList}


          // The funcion and variables to set types
          setTypeFilter={setTypeFilter}
          typeFilter={typeFilter} />

        <div className="recipePreviewBlock">
          {recipes.slice(0, 9).map(recipe => {
            return <PrewiewBlock recipe={recipe} key={recipe.id} />
          })}
        </div>
      </div>
    </div>
  );
}
// setRecipes(data.results)
export default Filter;