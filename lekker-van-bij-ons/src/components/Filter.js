import backgroundImage from '../img/backgroundImage.jpg';
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
      {recipes.map(test => {
        return <p>{test.id}</p>
      })}
    </div>
  );
}

export default Filter;