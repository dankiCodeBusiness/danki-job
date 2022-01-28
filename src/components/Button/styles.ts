import styled, {css} from "styled-components";

interface ButtonProps {
    outline: boolean
}

export const Container = styled.button<ButtonProps>`
  outline: none;
  border-radius: 43.5px;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  display: block;
  width: 100%;
  padding: 29px 0;

  ${({outline}) => outline ? css`
    border: 1px solid var(--purple-200);
    background-color: var(--white);
    color: var(--purple-200);
  ` : css`
    border: none;
    background-color: var(--purple-200);
    color: var(--white);
  `}
  &:hover {
    background-color: var(--purple-100);
    color: var(--purple-200);
  }
`;
