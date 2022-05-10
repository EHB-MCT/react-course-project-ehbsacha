import backgroundImage from '../img/backgroundImage.jpg';
import PrewiewBlock from './PreviewBlock';
import React, { useState, useEffect } from 'react';

function Filter() {

  const [recipes, setList] = useState([]);

  useEffect(() => {
    fetch(`https://recepten-liese-c.herokuapp.com/recipes`)
      .then((response) => response.json())
      .then((data) => setList(data))
  }, [])

  return (
    <div>
      <div className="filterHeader">
        <img src={backgroundImage} alt="" />
      </div>
      <div class="recipePreviewBlock">
        {recipes.map(recipe => {
          return <PrewiewBlock recipe={recipe} />
          // return <p>{test.id}</p>
        })}
        {/* <Recipe-preview ngFor="let recipe of recipes | async | slice:0:8" [recipe]="recipe"> */}
      </div>
    </div>
  );
}

export default Filter;