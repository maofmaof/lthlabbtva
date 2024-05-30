import { useEffect, useRef } from 'react';
import styled from '@emotion/styled'

function ViewedRecipes(recipe) {

  const viewedRecipes = useRef(0);

  useEffect(() => {
    viewedRecipes.current = viewedRecipes.current + 1;
  }, [recipe])

  return (
    <DIV >
      <h1>Viewed recipes : {viewedRecipes.current} sort of correct...</h1>
    </DIV>
  );
}
const DIV = styled.div`
  margin: auto;
  width: 50%;
  font-family : 'EB Garamond';
`

export default ViewedRecipes;
