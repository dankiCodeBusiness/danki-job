import styled, { css } from 'styled-components'
import { cssVar, transparentize } from 'polished'

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
            ${btnColor ? cssVar(btnColor) : cssVar('--purple-200')};
          background-color: var(--white);
          color: ${btnColor ? cssVar(btnColor) : cssVar('--purple-200')};

          &:hover {
            transition: ease-out .2s;
            background-color: ${btnColor
              ? transparentize(0.7, String(cssVar(btnColor)))
              : cssVar('--purple-100')};
            color: ${btnColor ? cssVar(btnColor) : cssVar('--purple-200')};
          }
        `
      : css`
          border: none;
          background-color: ${btnColor
            ? cssVar(btnColor)
            : cssVar('--purple-200')};
          color: var(--white);

          &:hover {
            background-color: ${btnColor
              ? transparentize(0.7, String(cssVar(btnColor)))
              : cssVar('--purple-100')};
            color: ${btnColor ? cssVar(btnColor) : cssVar('--purple-200')};
          }
        `}
`
