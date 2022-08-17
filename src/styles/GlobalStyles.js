import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #141414;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style-type: none;
  }

  a,button {
    text-decoration: none;

    :hover {
      cursor: pointer;
    }
  }
`;
