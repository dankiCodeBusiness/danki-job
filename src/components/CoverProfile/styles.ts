import styled from "styled-components";

interface PropsContainer {
    file: string
}

export const Container = styled.div<PropsContainer>`
  background-image: url("${({file}) => file}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 93px 0;
  
  div {
    width: 100%;
    max-width: 240px;
  }
`;
