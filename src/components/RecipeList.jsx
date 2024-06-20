//home page

import { useNavigate } from "react-router-dom"

export default function RecipeList (props) {

  let navigate = useNavigate()
  const linkToExpandedItem = (item) => {
    navigate(`${item.idMeal}`)
  }

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

      {
      props.recipeArray.map((recipe) => (
        <div className="list-item" 
        onClick={() => linkToExpandedItem(recipe)} 
        key={recipe.idMeal}
        >
          <h3>{recipe.idMeal}</h3>
          <h3>{recipe.strMeal}</h3>
          <h3>{recipe.strCategory}</h3>
        </div>
      ))}
    </div>
    
  )
}

