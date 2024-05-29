import Header from "./Header"
import Footer from "./Footer"
import FoodCard from "./FoodCard"
import ViewedRecipes from "./ViewedRecipes"
import { useState, useEffect } from 'react';
import styled from '@emotion/styled'

function Layout() {

    const [recipe, setRecipe] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchRecipe();
    }, [])

    async function fetchRecipe() {
        let randomNr = Math.floor(Math.random() * 49) + 1
        const response = await fetch("https://dummyjson.com/recipes/" + randomNr)
        const fetchedData = await response.json();
        setRecipe(fetchedData)
        setIsLoading(false)
    }
    return (
        <div >
            <Header />
            <ViewedRecipes recipe={recipe}/>
            {isLoading ? <h1>Its loading....</h1> : <>
                <FoodCard recipe={recipe} />
                
            </>
            }
            <Button onClick={fetchRecipe}>New recipe</Button>
            <Footer />
        </div>
    );
}
const Button = styled.button`
  margin : 0 auto;
  display: block;
  padding: 25px;
  background-color: yellow;
  font-size: 25px;
  border-radius: 35px;
  
  &:hover {
    color: #414a4c;
  }
`
export default Layout;
