import styled from '@emotion/styled'

function Header() {

  return (
    <Div>

      <H1>Random food recipe fetcher v2 </H1>
      
      
    </Div>
  );
}

export default Header;

const Div = styled.div`
text-align: center;
width: 90%;
height: 100px;
font-family: Arial, Helvetica, sans-serif;
`
const H1 = styled.h1`

`


const Button = styled.button`
  padding: 100px;
  background-color: yellow;
  font-size: 24px;
  border-radius: 8px;
  color: asdasdasd;
  font-weight: bold;
  &:hover {
    color: white;
  }
`