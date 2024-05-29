import styled from '@emotion/styled'
import svgFood from '../images/food-svgrepo-com.svg'

function Header() {

  return (
    <Div>

      <H1>Random food recipe fetcher v2 <SVG src={svgFood}></SVG></H1>
    </Div>
  );
}

export default Header;

const Div = styled.div`
text-align: center;
height: 150px;
font-family: Arial, Helvetica, sans-serif;
`
const H1 = styled.h1`
font-family : 'EB Garamond';
`
const SVG = styled.img`
width : 50px;
height : 50px;
`
