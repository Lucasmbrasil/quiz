import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: "Noto Sans Mono", monospace;
  background-color: rgb(250, 247, 191);
  color: #49009c;
}
a {
  text-decoration: none;
  color: black;
}

`;

export default GlobalStyle;
