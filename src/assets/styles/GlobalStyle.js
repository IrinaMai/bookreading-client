import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
html {
  color: ${(props) => props.theme.MAIN_TEXT}
}
body {
  background-color: ${(props) => props.theme.MAIN_BACKGROUND};
  font-family: "Montserrat", sans-serif;
}
.fa {
  color: ${(props) => props.theme.MAIN_TEXT};
}
`
export default GlobalStyle;