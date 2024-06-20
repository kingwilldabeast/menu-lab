//home page

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function RecipeList (props) {

  const [categoryList, setCategoryList] = useState([])

  let navigate = useNavigate()
  const linkToExpandedItem = (item) => {
    navigate(`${item.idMeal}`)
  }

  const getCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      const categories = response.data.categories.map(category => category.strCategory)
      setCategoryList(categories)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  // console.log(`Array on list page is ${props.recipeArray}`)

  return (
    <div className="container">

      {/* <p>{`Recipes involving ${props.input}`}</p> */}

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
          {
            categoryList.map((category, index) =>(
              <option key={index}>{category}</option>
            ))
          }
        </select>
        <button>Search</button>
      </form>

      {
      props.recipeArray.map((recipe) => (
        <div className="list-item" 
        onClick={() => linkToExpandedItem(recipe)} 
        key={recipe.idMeal}
        >
          <h3>{recipe.idMeal}</h3>
          <h3>{recipe.strMeal}</h3>
          <h3>{recipe.strCategory}</h3>
          <h3>{recipe.strArea}</h3>
          <img className="image" src={recipe.strMealThumb} width={100}></img>
        </div>
      ))}
    </div>
    
  )
}

