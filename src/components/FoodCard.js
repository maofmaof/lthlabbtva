import styled from '@emotion/styled'
import { useState, useEffect } from 'react';

function FoodCard(props) {
    // här ska props komma
    useEffect(() => {
        console.log(props.ingredients)
        console.log(props.instructions)
    }, [])

    function renderRecipeArr(arr) { //props
        return arr.map((ele) => {
            return <LI>{ele}</LI>
        })
    }

    return (
        <Div>
            <DivItem><H1>Random name</H1>
                <H2> Calories per serving : Random name</H2>
                <H2>Time to make Random name</H2>
                <H2>Difficulty : Random name</H2>
            </DivItem>
            <DivItem>
                <IMG src="https://cdn.dummyjson.com/recipe-images/1.webp"></IMG>
            </DivItem>
            <DivItem> <H3>{renderRecipeArr(props.ingredients)}</H3></DivItem>
            <DivItem>  <H3>{renderRecipeArr(props.instructions)}</H3> </DivItem>

        </Div>

    );
}

export default FoodCard;

const Div = styled.div`
display : flex;
flex-wrap: wrap;

width: 80%;
margin: auto;
`
const DivItem = styled.div`
width: 50%;
box-sizing: border-box;
`
const H1 = styled.h1`
`
const H2 = styled.h2`
`
const H3 = styled.h3`
`
const IMG = styled.img`
width: 400px;
height: 400px;
`
const LI = styled.li`
font-size: 20px;
list-style-type: none;

`

const Button = styled.button`
  padding: 20px;
  background-color: yellow;
  font-size: 24px;
  border-radius: 8px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`