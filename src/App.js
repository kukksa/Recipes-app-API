import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "586dc9c5";
  const MY_KEY = "fdbccde19634f1864684495554875129";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salmon");


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  },[wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className='container'>
        <p>we have more than 2 million of</p>
        <h2>Cooking</h2>
        <h2>recipes</h2>
        <hr />
      </div>
      <div className='search'>
        <form onSubmit={finalSearch}>
          <input type="text" placeholder='ingredient, dish, keyword' onChange={myRecipeSearch} value={mySearch}/>
        </form>
    
        <button onClick={finalSearch} className='btn'>Search</button>
      </div>
      <div className='containerRecipes'>
      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        cuisineType={element.recipe.cuisineType}
        dishType={element.recipe.dishType}
        ingredients={element.recipe.ingredientLines}
        url={element.recipe.url}/>        
      ))        
      }
    </div>  
    </div>
  );
}

export default App;
