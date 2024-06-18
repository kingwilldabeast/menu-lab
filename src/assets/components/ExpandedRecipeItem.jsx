import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

export default function MailboxDetails (props) {

  const [currentRecipe, setCurrentRecipe] = useState([])

  let {RecipeId} = useParams() 
  console.log(`ID is ${RecipeId}`)

  useEffect(() => {
    let selectedRecipe = props.recipeArray.find((recipe) => recipe.idMeal === parseInt(RecipeId))
    setCurrentRecipe(selectedRecipe)
    console.log(`recipe is ${selectedRecipe}`)
  }, [props.recipeArray, RecipeId])

  return currentRecipe ? (
    <div className="">
      <Link to ='/'>Back to Search Results</Link>
      
      <div className="">
          <h1>Mailbox {mailbox.id}</h1>
          <h3>Size: {mailbox.boxSize}</h3>
          <h3>Owner: {mailbox.boxholder}</h3>
      </div>

    </div>
  ) : <h1>Mailbox not found</h1>;
}

