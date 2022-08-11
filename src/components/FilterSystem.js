import React, { useState, useEffect } from 'react';
function FilterSystem(props) {

  var recipes = props.recipes;

  const [typeList, setTypes] = useState([])
  // const [timeList, setTime] = useState([])

  function getTypeList() {
    recipes.map(recipe => {
      recipe.dishTypes.map(type => {
        if (!typeList.includes(type)) {
          setTypes(typeList.concat(type))
        }
      })
    })
  }

  // function getDurationList() {
  //   recipes.map(recipe => {
  //     console.log(recipe);
  //     if (!timeList.includes(recipe.time)) {

  //       setTime(timeList.concat(recipe.time))
  //     }
  //   })
  //   const newList = timeList.sort(function (a, b) { return a - b })
  //   if (timeList !== newList) {
  //     setTime(newList)
  //   }
  // }

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
          return <label className="checkLabel" key={type.toString()}>
            <p className="typeName">{type}</p>
            <input type="checkbox" />
            <span className="chkmrk"></span>
          </label>
        })}
      </div>


      {/* {getDurationList()}
      <div className="filterBlock">
        <p className="filterBlockTitle">Time:</p>
        {timeList.map(time => {
          console.log(time);
          return <label className="checkLabel" key={time.toString()}>
            <p className="typeName">{time}</p>
            <input type="checkbox" />
            <span className="chkmrk"></span>
          </label>
        })}
      </div> */}

    </div>
  );
}

export default FilterSystem;