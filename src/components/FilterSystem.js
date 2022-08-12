import React, { useState, useEffect } from 'react';
function FilterSystem(props) {

  var recipes = props.recipes;

  // const [typeList, setTypes] = useState([])

  function getTypeList() {
    recipes.map(recipe => {
      recipe.dishTypes.map(type => {
        if (!props.typeList.includes(type)) {
          props.setTypes(props.typeList.concat(type));
        }
      })
    })
  }

  function updateTypeFilter(updateType) {

    if (!props.typeFilter.includes(updateType)) {

      props.setTypeFilter(props.typeFilter.concat(updateType));

    } else {

      var array = [];

      props.typeFilter.map(type => {
        if (type != updateType) {
          array = array.concat(type);
        }
      });

      props.setTypeFilter(array);
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
        {props.typeList.map(type => {
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

// onClick={function () {
//   props.setTypeFilter(type);
// }}

export default FilterSystem;