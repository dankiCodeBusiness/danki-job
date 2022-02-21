import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-row-gap: 2rem;

  article {
    display: flex;
    grid-column-gap: 1rem;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }

    header {
      h1 {
        font-size: 1.6rem;
      }

      h2 {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }

  section {
    display: grid;
    grid-row-gap: 2rem;

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      margin: 15px 0;
    }
    
    div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 1rem;
      
      img {
        width: 100%;
      }
    }
  }
`
