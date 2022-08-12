import React, { useState, useEffect } from 'react';
function FilterSystem(props) {

  const { recipes, setTypes, typeList, setTypeFilter, typeFilter } = props;

  function getTypeList() {
    recipes.map(recipe => {
      recipe.dishTypes.map(type => {
        if (!typeList.includes(type)) {
          setTypes(typeList.concat(type));
        }
      })
    })
  }

  function updateTypeFilter(updateType) {

    if (!typeFilter.includes(updateType)) {

      setTypeFilter(typeFilter.concat(updateType));

    } else {

      var array = [];

      typeFilter.map(type => {
        if (type != updateType) {
          array = array.concat(type);
        }
      });

      setTypeFilter(array);
    }
  }

  return (
    <div className="filterSystem">
      <p className="filterTitle">Filter opties</p>
      <div className="filterBlock">
        <p className="filterBlockTitle">Score:</p>
        <input type="number" placeholder="0" min="0" max="100" />
      </div>

      {getTypeList()}
      <div className="filterBlock">
        <p className="filterBlockTitle">Type:</p>
        {typeList.map(type => {
          return (
            <label className="checkLabel" key={type.toString()}>
              <p className="typeName">{type}</p>
              <input type="checkbox" key={type.toString()} onClick={() => updateTypeFilter(type)} />
              <span className="chkmrk"></span>
            </label>
          );
        })}
      </div>

    </div>
  );
}

export default FilterSystem;