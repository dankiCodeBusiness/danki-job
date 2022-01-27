import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 130px));
  grid-auto-rows: auto;
  align-self: flex-start;
  justify-items: flex-start;
  
  @media(max-width: 780px) {
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(80px, 100px));
  }
  
  button {
    background: transparent;
    border: 0;
    font-size: .85rem;
    color: var(--dark);
    text-transform: uppercase;
    margin-bottom: 15px;

    transition: .5s ease-in;
    &:hover {
      transition: .3s ease-out;
      color: Var(--purple-200);
    }

    &:first-child {
      color: var(--purple-200);
      font-weight: 700;
    }
  }

`;
