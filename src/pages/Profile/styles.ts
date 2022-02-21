import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 3.5rem;

   > article {
    display: grid;
    grid-row-gap: 2rem;

    header {
      display: flex;
      align-items: center;
      grid-column-gap: 1.5rem;
      
      @media(max-width: 660px) {
        flex-direction: column;
        grid-row-gap: 2rem;
      }

      img {
        width: 100%;
        max-width: 200px;
        border-radius: 100px;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      
      @media(max-width: 860px) {
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
      }
    }
  }

  .skills {
    h2 {
      font-weight: 400;
      font-size: 0.85rem;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    div {
      display: grid;
      grid-template-columns: repeat(auto-fit, 150px);
      grid-gap: 1rem;

      p {
        font-size: 1rem;
      }
    }
  }

  .projects {
    h2 {
      font-weight: 400;
      font-size: 0.85rem;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 2rem;

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
      
      article {
        
        header {
          img {
            width: 100%;
          }
          h1 {
            margin-top: 18px;
            font-size: 1.8rem;
            font-weight: 700;
            text-decoration: underline;
          }
        }
        p {
          font-size: 1.2rem;
          margin-top: 10px;
        }
      }
      
    }
  }
`
