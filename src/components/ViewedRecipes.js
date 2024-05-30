import { useMemo, useState, useEffect } from 'react';
import styled from '@emotion/styled'

function ViewedRecipes({ recipe }) {
  const [viewedRecipes, setViewedRecipes] = useState(0)

  const [counter, setCounter] = useState(1)

  useEffect(() => {
    setViewedRecipes(e => e + 1)
  }, [recipe])

  const expensiveCalc = (num) => {

    return Math.random() * num
  }
  const calc = useMemo(() => expensiveCalc(counter), [counter])

  function doCalc() {
    setCounter(counter + 1)
    if (counter > 10) {
      setCounter(1)
    }
  }
  return (
    <DIV >
      <h1>Cached value, completely pointless {calc}</h1>
      <h1>Viewed recipes {viewedRecipes} </h1>
      <button onClick={doCalc}>Adding to expensive calc</button>
    </DIV>
  );
}
const DIV = styled.div`
  margin: auto;
  width: 50%;
  font-family : 'EB Garamond';
`

export default ViewedRecipes;
