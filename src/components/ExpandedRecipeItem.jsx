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

  
// Function to extract ingredients and measures
const getIngredients = (recipe) => {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure })
    }
  }
  return ingredients
}

// Render instructions if available
const renderInstructions = (instructions) => {
  if (instructions) {
    // Split instructions into array of steps if necessary
    const steps = instructions.split('\n')
    return (
      <div>
        <h4>Instructions</h4>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    )
  }
  return null
}

const ingredients = currentRecipe ? getIngredients(currentRecipe) : []

return currentRecipe ? (
  <div className="expanded-container">
    <Link to='/'>Back to Search Results</Link>
    <div className="expanded-list-item">
      {currentRecipe.strMealThumb && (
        <img src={currentRecipe.strMealThumb} alt={currentRecipe.strMeal} />
      )}
  
      <h3>{currentRecipe.strMeal}</h3>
      <h4>{currentRecipe.strCategory}</h4>

      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.ingredient} - {item.measure}
          </li>
        ))}
      </ul>

      {renderInstructions(currentRecipe.strInstructions)}
    </div>
  </div>
) : (
  <div>
    <h1>Recipe not found</h1>
    <Link to='/'>Back to Search Results</Link>
  </div>
)
}

