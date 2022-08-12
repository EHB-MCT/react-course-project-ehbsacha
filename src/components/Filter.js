import backgroundImage from '../img/backgroundImage.jpg';
import PrewiewBlock from './PreviewBlock';
import FilterSystem from './FilterSystem';
import React, { useState, useEffect } from 'react';
import { recipeService } from '../services/apiService';

function Filter() {

  // recipes are stored here
  const [recipes, setRecipes] = useState([]);
  const [typeList, setTypes] = useState([]);

  // Updating variables
  const [query, setQuery] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [intolerances, setIntolerances] = useState([]);

  // fullUrl items get updated
  var extraVariables = `query=${query}&intolerances=${intolerances}&type=${typeFilter}`;

  // Previous api
  // https://recepten-liese-c.herokuapp.com/recipes

  useEffect(() => {
    recipeService.complexSearchFetch(extraVariables)
      .then((data) => setRecipes(data.results))
  }, []);

  useEffect(() => {
    //call function when something change in state
    updateFetch();
  }, [query, typeFilter, intolerances])

  function updateFetch() {
    // setRecipes([]);
    recipeService.complexSearchFetch(extraVariables)
      .then((data) => setRecipes(data.results))
      .then(console.log(query, typeFilter, intolerances))
  }

  function getTypeList() {
    recipes.map(recipe => {
      recipe.dishTypes.map(type => {
        if (!typeList.includes(type)) {
          setTypes(typeList.concat(type));
        }
      })
    })
  }

  return (
    <div>
      <div className="filterHeader">
        <img src={backgroundImage} alt="" />
      </div>
      <p className="title">Op deze pagina kunt u filteren</p>
      <div className="filterContent">
        <FilterSystem
          // The funcion and variables to set types
          getTypeList={getTypeList}
          typeList={typeList}

          // The funcion and variables to set types
          setTypeFilter={setTypeFilter}
          typeFilter={typeFilter}

          // The function and variables to set the query filter
          setQuery={setQuery}
          query={query}

          // The function and variables to set intolerances
          setIntolerances={setIntolerances}
          intolerances={intolerances}

        />

        <div className="recipePreviewBlock">
          {recipes.slice(0, 12).map(recipe => {
            return <PrewiewBlock recipe={recipe} key={recipe.id} />
          })}
        </div>
      </div>
    </div>
  );
}
// setRecipes(data.results)
export default Filter;