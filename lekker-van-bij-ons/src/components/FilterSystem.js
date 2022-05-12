import React, { useState, useEffect } from 'react';
function FilterSystem(props) {

  var recipes = props.recipes

  const [typeList, setTypes] = useState([])

  function getList() {
    recipes.map(recipe => {
      {
        recipe.dishTypes.map(type => {
          if (!typeList.includes(type)) {
            setTypes(typeList.concat(type))
          }
        })
      }
    })
  }

  return (
    <div className="filterSystem">
      <p className="filterTitle">Filter opties</p>
      <div className="filterBlock">
        <p className="filterBlockTitle">type:</p>
        {typeList.map(type => {
          return <label className="checkLabel" key={type.toString()}>
            <p className="typeName">{type}</p>
            <input type="checkbox" />
            <span className="chkmrk"></span>
          </label>
        })}
      </div>
      {getList()}
    </div>
  );
}

export default FilterSystem;