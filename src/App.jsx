import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'

export default function App() {
  const [recipeArray, setRecipeArray] = useState([])
  const [input, setInput] = useState("")

  // handleSubmit
  // setInput()

  //handeChange

  useEffect(()=>{
    const getData = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      // console.log('data', response)
      
      //assign API results to array
      set(response.data.results)

    }
    getData()

  },[])

  console.log(recipeArray)

  return (
    <div className='app'>
          {/* <SearchBar/> */}
          {/* <input>{}</input> handle chante and handle submit */}
          <Routes>
              <Route path ='/' element={<RecipeList recipeArray = {recipeArray}/>}/>
              <Route path ='/:RecipeId' element ={<ExpandedRecipeItem recipeArray = {recipeArray}/>}/>
        </Routes>
    </div>
  )
}

