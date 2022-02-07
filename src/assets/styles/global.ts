import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  :root {
    --white: #ffffff;
    --purple-100: #f5f0ff;
    --purple-200: #5e3ea1;
    --dark: #000000;
    --gray-light: #CFCFCF;
    --gray-light-100: #D8D8D8;
    --red-200: #CC3E3E;
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background-color: var(--white);
    padding: 60px 100px;
    position: absolute;
    border-radius: 5px;
    inset: 40px;
    overflow: auto;
    
    @media(max-width: 480px) {
      padding: 30px 20px;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    border: 0;
    background: transparent;
    font-size: 2rem;
    color: var(--purple-200);
    transition: ease-in .2s;

    &:hover {
      transition: ease-out .4s;
      color: var(--purple-100);
      text-shadow: var(--dark) 1px 1px 2px 2px;
    }
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

export { GlobalStyle, Container }
