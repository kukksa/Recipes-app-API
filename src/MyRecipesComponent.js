function MyRecipesComponent({label, image, calories, cuisineType, dishType, url, ingredients}) {
    return (
        <div>
            <div className="recipe">
        <div>     
            <h3>{label}</h3>
        </div>  
        <div className="type">  
            <p>Cuisine type: {cuisineType}</p>
            <p>Type of dishes: {dishType}</p>
            <p>{calories.toFixed()} calories</p>
        </div>  

        <ul className="list">
            {ingredients.map((ingredient,index) =>(
                <li key={index}>
                    {ingredient}
                </li>
            ))}
        </ul>

            <img src={image} alt="dishes" width='340px' height="290px" />
            <button className="btnRecipe"><a href={url}>Click to see full recipe</a></button>
        </div>   

        </div>
    )
}
export default MyRecipesComponent;