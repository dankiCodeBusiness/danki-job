import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #ffffff;
    --purple-100: #f5f0ff;
    --purple-200: #5e3ea1;
    --dark: #000000;
    --gray-light: #CFCFCF;
    --gray-light-100: #D8D8D8;
  }

  html {
    @media (max-width: 1260px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }

    @media (max-width: 414px) {
      font-size: 67.5%
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--white);
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`

const Container = styled.div`
  background-color: var(--white);
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`

export {GlobalStyle, Container}
