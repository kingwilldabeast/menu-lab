//home page

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function RecipeList (props) {

  let navigate = useNavigate()
  const linkToExpandedItem = (item) => {
    navigate(`${item.idMeal}`)
  }

  // console.log(`Array on list page is ${props.recipeArray}`)

  return (
    <div className="">
      <form onSubmit={props.handleSubmit}>
        <input
          name="searchBar"
          placeholder="search a recipe"
          type="text"
          value={props.inputInProgress.searchBar}
          onChange={props.updateTyping}
          required
        />
        <button>Find recipe</button>
      </form>

      <form onSubmit={props.handleDropdown}>
        <select name="categories" id="categories">
          <option>Beef</option>
          <option>Chicken</option>
          <option>Lamb</option>
          <option>Pasta</option>
          <option>Pork</option>
        </select>
        <button>Search</button>
      </form>

    <div className="container">

      {/* <p>{`Recipes involving ${props.input}`}</p> */}


      {
      props.recipeArray.map((recipe) => (
        
        <div className="list-item" 
        onClick={() => linkToExpandedItem(recipe)} 
        key={recipe.idMeal}
        >
          <h3>{recipe.strMeal}</h3>
          <h4>{recipe.strCategory}</h4>
          <h4>{recipe.strArea}</h4>
          <img className="image" src={recipe.strMealThumb} width={100}></img>
        </div>
      ))}
    </div>
    </div>
    
  )
}

