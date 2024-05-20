import Header from "./Header"
import Footer from "./Footer"
import FoodCard from "./FoodCard"
import AvailableRecipes from "./AvailableRecipes"
import { useState, useEffect } from 'react';


function Layout() {

    const [recipe, setRecipe] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchRecipes();
    }, [])

    async function fetchRecipes() {
        let randomNr = Math.floor(Math.random() * 50) + 1
        const response = await fetch("https://dummyjson.com/recipes/" + randomNr)
        const fetchedData = await response.json();
        console.log(recipe)
        setRecipe(fetchedData)
        setIsLoading(false)
    }

    return (
        <div style={{ margin: "auto", width: "max-content" }}>
            <Header />
            {isLoading ? <h1>its loading....</h1> : <>
                <FoodCard ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    image={recipe.image} />
                <button onClick={fetchRecipes}>new recipe</button>
            </>}
            <Footer />
        </div>
    );
}

export default Layout;
