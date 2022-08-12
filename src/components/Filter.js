import backgroundImage from '../img/backgroundImage.jpg';
import PrewiewBlock from './PreviewBlock';
import FilterSystem from './FilterSystem';
import React, { useState, useEffect } from 'react';

function Filter() {
  // ApiKeys, each of them can do a certain amount of fetchcalls per day.
  // 150 points per key but it is a bit less than that in calls
  // 9d27c0e3e70247c2a0b1861d56e60375
  // a63bbb37b3b84baba1de52681e102f7e
  // 720fb95fb7e449d5be4fb2a453ce7db4
  // 0d9cf745b2b14fb0b1ec483abf3800cc
  // c4f7d95969c34c009df7bfc1b3f31347
  // fd29be03ea994da0a1d828da3d843a44
  // 66cb98c71b8e4c1e8bb94007b62a14c5
  // 3cea7defa0894eb69af1b16ead313107
  // a5a02c1e5a15414092f974b1aff77a10
  // 1e8cf27f56954a8095c6c173cfcc52e6

  // password

  // Constant values
  const baseUrl = 'https://api.spoonacular.com/'
  const typeOfRoute = 'recipes/complexSearch?';
  const returnAllRecipeInformation = true
  const limit = 9;
  const apiKey = '1e8cf27f56954a8095c6c173cfcc52e6'
  const endUrl = `&number=${limit}&addRecipeInformation=${returnAllRecipeInformation}&apiKey=${apiKey}`

  // recipes are stored here
  const [recipes, setRecipes] = useState([]);

  // Updating variables
  const [query, setQuery] = useState(['pasta', 'carrot']);
  const [typeList, setTypes] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [intolerances, setIntolerances] = useState([]);

  // fullUrl items get updated
  var extraVariables = `query=${query.toString()}&intolerances=${intolerances.toString()}&type=${typeFilter}`;

  var fullUrl = `${baseUrl}${typeOfRoute}${extraVariables}${endUrl}`;

  // Previous api
  // https://recepten-liese-c.herokuapp.com/recipes

  useEffect(() => {
    fetch(`${fullUrl}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.results))
  }, []);

  useEffect(() => {
    //call function when something change in state
    updateFetch();
  }, [typeFilter, intolerances])

  function updateFetch() {
    setRecipes([]);
    fetch(fullUrl)
      .then((response) => response.json())
      .then((data) => setRecipes(data.results))
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