import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import ExpandedRecipeItem from './components/ExpandedRecipeItem'

export default function App() {
  // const [input, setInput] = useState("")
  const [inputInProgress, setInputInProgress] = useState({ searchBar: '' });
  const [recipeArray, setRecipeArray] = useState([])
  const [ids, setIds] = useState([])

  const updateTyping = (e) => {
    setInputInProgress({ ...inputInProgress, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`input is ${inputInProgress.searchBar}`)
    // setInput(inputInProgress.searchBar)
    const searchTerm = inputInProgress.searchBar;
    setInputInProgress({searchBar:''})
    getData(searchTerm)
    
  }

  const getData = async (searchTerm) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    console.log(`recipes are ${response.data.meals}`)
    
    //assign API results to array
    setRecipeArray(response.data.meals)

  }

  const handleDropdown = async (e) => {
    e.preventDefault()
    const selected = e.target.elements.categories.value
    console.log(`www.themealdb.com/api/json/v1/1/search.php?c=${selected}`)
    getData(selected)
  }


    // console.log(`current text is ${inputInProgress.searchBar}`)
    // console.log(`searched item is ${input}`)

  return (
    <div className='app'>

        {/* <p>{`${searchTerm}`}</p> */}

          {/* <form onSubmit={handleSubmit}>
            <input
              name="searchBar"
              placeholder="search a recipe"
              type="text"
              value={inputInProgress.searchBar}
              onChange={updateTyping}
              required
            />
            <button>Find recipe</button>
          </form> */}



          <Routes>
              {/* <Route path ='/' element={<RecipeList recipeArray = {recipeArray}/>}/> */}
              
              <Route path ='/' element={<RecipeList 
              recipeArray = {recipeArray}
              handleSubmit = {handleSubmit}
              updateTyping = {updateTyping}
              inputInProgress = {inputInProgress}
              handleDropdown = {handleDropdown}
              />}/>

              <Route path ='/:RecipeId' element ={<ExpandedRecipeItem recipeArray = {recipeArray}/>}/>
        </Routes>
    </div>
  )
}

