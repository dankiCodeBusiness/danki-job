import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 400px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
  margin-top: 60px;
  
  @media(max-width: 1260px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 580px));
  }

  .dev-box {
    width: 100%;
    max-width: 400px;

    @media(max-width: 1260px) {
      max-width: 580px;
    }
    

    img {
      width: 100%;
      height: auto;
      margin-bottom: 17px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right: 16px;
      }

      h2 {
        font-weight: 700;
        font-size: 1.6rem;
      }
    }
  }

`;
