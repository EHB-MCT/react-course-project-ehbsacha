import React, { useState, useEffect } from 'react';
function FilterSystem(props) {

  const { getTypeList, typeList, setTypeFilter, typeFilter, setQuery, query } = props;

  function updateQueryFilter(newQuery) {
    if (!query.includes(newQuery)) {
      setQuery(query.concat(newQuery));
    } else {
      var array = [];
      query.map(type => {
        if (type != newQuery) {
          array = array.concat(type);
        }
      });
      setQuery(array);
    }
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

      <div className="filterBlock">
        <p className="filterBlockTitle">Search:</p>
        <form>
          <input type="text" id="search"></input>
          <button onClick={
            function (event) {
              event.preventDefault();
              updateQueryFilter(document.getElementById('search').value.toLowerCase());
            }}>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <p className="filterBlockTitle">Active Search items</p>
        {query.map(item => {
          return (
            <div>{item}</div>
          )
        })}
      </div>

      {getTypeList()}
      <div className="filterBlock">
        <p className="filterBlockTitle">Type:</p>
        {typeList.map(type => {
          return (
            <label className="checkLabel" key={type.toString()}>
              <p className="typeName">{type}</p>
              <input type="checkbox" key={type.toString()} onClick={() => updateTypeFilter(type.toLowerCase())} />
              <span className="chkmrk"></span>
            </label>
          );
        })}
      </div>

    </div >
  );
}

export default FilterSystem;