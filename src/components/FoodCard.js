import styled from '@emotion/styled'

function FoodCard(props) {
    
    const recipeInfo = props.recipe;
    
    function renderRecipeArr(arr) { //props
        return arr.map((ele, i) => {
            return <LI key={i}>{ele}</LI>
        })
    }

    return (
        <Div>
            <DivItem><H1>{recipeInfo.name}</H1>
                <H2> Calories per serving :  {recipeInfo.caloriesPerServing}</H2>
                <H2> Time to cook : {recipeInfo.cookTimeMinutes} minutes</H2>
                <H2>Difficulty : {recipeInfo.difficulty}</H2>
                <H2>Recipe rating : {recipeInfo.rating}</H2>
            </DivItem>
            <DivItem>
                <IMG src={recipeInfo.image}></IMG>
            </DivItem>
            <DivItem> <H2>Ingredient list</H2> <P>{renderRecipeArr(recipeInfo.ingredients)}</P></DivItem>
            <DivItem> <H2>Instructions</H2> <P>{renderRecipeArr(recipeInfo.instructions)}</P> </DivItem>
        </Div>

    );
}

export default FoodCard;

const Div = styled.div`
display : flex;
flex-wrap: wrap;

width: 50%;
margin: auto;
`
const DivItem = styled.div`
width: 50%;
box-sizing: border-box;
`
const H1 = styled.h1`
font-family : 'EB Garamond';
`
const H2 = styled.h2`
font-family : 'EB Garamond';
`
const P = styled.p`
font-family: 'EB Garamond';
`
const IMG = styled.img`
border-radius: 100%;
width: 400px;
height: 300px;
`
const LI = styled.li`
font-size: 20px;
list-style-type: none;

`
