import styled from "styled-components";

export const Container = styled.button`
  border: none;
  outline: none;
  background-color: var(--purple-200);
  color: var(--white);
  border-radius: 43.5px;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  display: block;
  width: 100%;
  padding: 29px 0;
  
  &:hover {
    background-color: var(--purple-100);
    color: var(--purple-200);
  }
`;
