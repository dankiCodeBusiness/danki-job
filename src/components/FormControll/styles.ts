import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  label {
    text-transform: uppercase;
    font-size: 0.85rem;
    width: 100%;
    display: block;
    margin-bottom: 16px;
  }

  input, textarea {
    outline: none;
    width: 100%;
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom-color: var(--gray-light);
    border-bottom-width: 0.1rem;
    padding: 10px 0;

    ::placeholder {
      color: var(--gray-light);
      font-size: 1rem;
    }
  }
`;
