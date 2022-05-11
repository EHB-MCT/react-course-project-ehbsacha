import backgroundImage from '../img/backgroundImage.jpg';
import PrewiewBlock from './PreviewBlock';
import FilterSystem from './FilterSystem';
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
      <div className="filterContent">
        <FilterSystem recipes={recipes} />
        <div className="recipePreviewBlock">
          {recipes.map(recipe => {
            return <PrewiewBlock recipe={recipe} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;