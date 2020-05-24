import { createGlobalStyle } from "styled-components";
import colors from "../styles/colors";

/* 
  WARNING: Consider to use: https://github.com/nfl/react-helmet
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&family=Rubik:wght@300;400;500;700&display=swap');

  font-family: 'Poppins', sans-serif;
  font-family: 'Rubik', sans-serif;
*/

const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: ${colors.black};  
  }

  .container {
    width: 1140px;
    display: flex;
    margin: 0 auto;
  }

  h1, h2, h3 {
    font-family: "Poppins", sans-serif;
  }

  h1 { font-size: 34px; }
  h2 { font-size: 28px; }
  h3 { font-size: 18px; }
`;

export default GlobalStyles;
