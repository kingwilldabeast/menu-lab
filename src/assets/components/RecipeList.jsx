//home page

import { useNavigate } from "react-router-dom"

export default function RecipeList (props) {

  let navigate = useNavigate()
  const linkToExpandedItem = (item) => {
    navigate(`${item.idMeal}`)
  }

  return (
    <div className="">
      {
      props.recipeArray.map((recipe) => (
        <div className="" onClick={() => linkToExpandedItem(recipe)} key={recipe.idMeal}>
          <h3>{recipe.idMeal}</h3>
          <h3>{recipe.strMeal}</h3>
          <h3>{recipe.strCategory}</h3>
        </div>
      ))}
    </div>
    
  )
}

