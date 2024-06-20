import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

export default function ExpandedRecipeItem (props) {

  const [currentRecipe, setCurrentRecipe] = useState({})

  let {RecipeId} = useParams() 
  console.log(`ID is ${RecipeId}`)
  console.log(`Array on expanded page is ${props.recipeArray}`)

  useEffect(() => {
    let selectedRecipe = props.recipeArray.find((recipe) => recipe.idMeal === RecipeId)
    setCurrentRecipe(selectedRecipe)
    // console.log(`recipe is ${selectedRecipe}`)
  }, [props.recipeArray, RecipeId])

  return currentRecipe ? (
    <div className="">
      <Link to ='/'>Back to Search Results</Link>
      
      <div className="">
        <h3>{currentRecipe.idMeal}</h3>
          <h3>{currentRecipe.strMeal}</h3>
          <h3>{currentRecipe.strCategory}</h3>
      </div>

    </div>
  ) 
  : 
  <div>
    <h1>Recipe not found</h1>
    <Link to ='/'>Back to Search Results</Link>
    </div>
}

