import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

interface ButtonProps {
  outline: boolean
  btnColor?: string
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
  transition: ease-in .4s;

  ${({ outline, btnColor }) =>
    outline
      ? css`
          border: 1px solid
            ${btnColor ? btnColor : '#5e3ea1'};
          background-color: var(--white);
          color: ${btnColor ? btnColor : '#5e3ea1'};

          &:hover {
            transition: ease-out .2s;
            background-color: ${btnColor
              ? transparentize(0.7, btnColor)
              : '#f5f0ff'};
            color: ${btnColor ? btnColor : '#5e3ea1'};
          }
        `
      : css`
          border: none;
          background-color: ${btnColor
            ? btnColor
            : '#5e3ea1'};
          color: var(--white);

          &:hover {
            background-color: ${btnColor
              ? transparentize(0.7, btnColor)
              : '#f5f0ff'};
            color: ${btnColor ? btnColor : '#5e3ea1'};
          }
        `}
`
