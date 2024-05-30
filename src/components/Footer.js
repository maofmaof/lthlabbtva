import styled from '@emotion/styled'
import { useContext } from 'react';
import { ThemeContext } from './Layout';
function Footer() {

  const color = useContext(ThemeContext)

  const Div = styled.div`
  text-align: center;
  width: 50%;
  margin: auto;
  height: 100px;
  font-family : 'EB Garamond';
  background-color : ${color ? "white" : "black"};
  color : ${color ? "dark" : "white"};
  `
  return (
    <Div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Div>
  );
}



export default Footer;
