import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  li {
    list-style: none;
  }

  a, button {
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }

  body {
    background: #000000;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
  }
`;
