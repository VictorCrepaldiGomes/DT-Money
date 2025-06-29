import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.gray100};
    -webkit-font-smoothing: antialiased;

    }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

`;