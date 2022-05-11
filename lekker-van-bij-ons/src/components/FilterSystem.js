import React, { useState, useEffect } from 'react';
function FilterSystem(props) {

  var recipes = props.recipes
  console.log(recipes);

  const [typeList, setTypes] = useState([])
  console.log(typeList)

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
      {recipes.map(recipe => {
        {
          return <p>{
            recipe.dishTypes.map(type => {
              return <div>- {type}</div>
            })
          }</p>
        }
      })}
      <p className="previewDetail">type:
        {typeList.map(type => {
          return <div>- {type}</div>
        })}
      </p>
      {getList()}
      {/* {filterButtons()}
      {filterButtons()}
      {filterButtons()} */}
    </div>
  );
}

export default FilterSystem;