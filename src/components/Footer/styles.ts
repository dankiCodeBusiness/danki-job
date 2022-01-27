import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 130px 0;
  
  @media(max-width: 480px) {
    padding: 40px 0 85px 0;
  }
  
  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--dark);
  }
`;
