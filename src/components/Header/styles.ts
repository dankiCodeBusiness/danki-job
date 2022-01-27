import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: grid;
  grid-area: header;

  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  background-color: var(--purple-100);

  justify-items: center;
  align-items: center;

  .top {
    width: 100%;
    max-width: 1080px;
    display: grid;
    grid-template-rows: 1fr;
    height: 150px;
    grid-template-columns: repeat(auto-fit, auto);
    grid-template-areas: 'dev logo register';

    justify-items: center;
    align-items: center;

    @media (max-width: 780px) {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      grid-template-areas: 
          'logo logo'
          'dev register'
    ;
    }

    @media (max-width: 480px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-template-areas: 
        'logo'
        'dev'
        'register'
    ;
      height: auto;
      padding-top: 48px;
      grid-gap: 2rem;
    }

    .dev {
      grid-area: dev;
    }

    .logo {
      grid-area: logo;
    }

    .register {
      grid-area: register;
    }

    .no-decoration {
      text-decoration: none;
    }

    span {
      color: var(--purple-200);
      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: 0.85rem;

      img {
        max-width: 179px;
      }

      a {
        color: var(--purple-200);
        font-weight: 700;
        padding: 4px 12px;
        border-radius: 4px;
        transition: background .7s ease-in;
      }

      .active {
        transition: .4s ease-out;
        text-decoration: none;
        color: var(--purple-100);
        background-color: var(--purple-200);
      }
    }
  }

  h1 {
    font-size: 3.1rem;
    font-weight: 400;
    max-width: 638px;
    width: 100%;
    text-align: center;
    padding-bottom: 56px;

    span {
      color: var(--purple-200);
    }

    @media (max-width: 480px) {
      padding-top: 30px;
      padding-bottom: 50px;
      font-size: 2.5rem;
    }
  }
`;
