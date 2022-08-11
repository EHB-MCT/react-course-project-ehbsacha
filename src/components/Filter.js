import backgroundImage from '../img/backgroundImage.jpg';
import PrewiewBlock from './PreviewBlock';
import FilterSystem from './FilterSystem';
import React, { useState, useEffect } from 'react';

function Filter() {

  const [recipes, setList] = useState([]);
  let baseUrl = 'https://api.spoonacular.com/recipes/complexSearch?'
  let query = 'query=pasta'
  let extraVariables = '&addRecipeInformation=true&number=5'
  let apiKey = '&apiKey=9d27c0e3e70247c2a0b1861d56e60375'

  useEffect(() => {
    fetch(`${baseUrl}${query}${extraVariables}${apiKey}`)
      .then((response) => response.json())
      .then((data) => setList(data.results))
  }, [])

  return (
    <div>
      <div className="filterHeader">
        <img src={backgroundImage} alt="" />
      </div>
      <p className="title">Op deze pagina kunt u filteren</p>
      <div className="filterContent">
        <FilterSystem recipes={recipes} />
        <div className="recipePreviewBlock">
          {recipes.slice(0, 9).map(recipe => {
            return <PrewiewBlock recipe={recipe} key={recipe.id} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;