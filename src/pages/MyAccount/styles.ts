import styled from 'styled-components'

interface ProjectProps {
  backgroundImage: string
}

export const Container = styled.section`
  form {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

    @media (max-width: 480px) {
      grid-row-gap: 0;
    }

    .picture {
      position: relative;

      div {
        position: absolute;
        display: grid;

        button {
          border: none;
          background: none;
        }
      }

      .img-avatar {
        width: 100%;
        max-width: 200px;
        border-radius: 100px;
      }

      @media (max-width: 480px) {
        grid-column: span 2;
      }
    }

    @media (max-width: 480px) {
      .picture {
        display: grid;
        justify-self: center;
        width: 200px;
      }
    }

    .container-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: dense;
      grid-column-gap: 1rem;

      div:first-child {
        grid-column: span 2;
      }

      @media (max-width: 480px) {
        grid-column: span 2;

        div:nth-child(2) {
          grid-column: span 2;
        }

        div:nth-child(3) {
          grid-column: span 2;
        }
      }
    }

    .about {
      grid-column: span 2;
    }

    .skills {
      grid-column: span 2;
      margin-bottom: 40px;

      h2 {
        font-weight: 400;
        font-size: 0.85rem;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      .skill-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
        grid-gap: 1rem;

        @media (max-width: 480px) {
          grid-template-columns: repeat(auto-fit, minmax(170px, 200px));
        }

        div {
          display: flex;
          flex-direction: row;
          align-items: center;

          label {
            margin-left: 20px;
            margin-top: 10px;
          }

          input[type='checkbox'] {
            position: relative;
            cursor: pointer;
          }

          input[type='checkbox']:before {
            content: '';
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            top: 0;
            left: 0;
            border: 2px solid var(--gray-light-100);
            border-radius: 1px;
            background-color: var(--gray-light-100);
          }

          input[type='checkbox']:checked:after {
            content: '';
            display: block;
            width: 6px;
            height: 12px;
            border: solid var(--purple-200);
            border-width: 0 4px 4px 0;
            border-radius: 2px;
            transform: rotate(45deg);
            position: absolute;
            top: 2px;
            left: 7px;
          }
        }
      }
    }

    .projects {
      grid-column: span 2;
      margin-bottom: 40px;

      h2 {
        grid-column: span 2;
        font-weight: 400;
        font-size: 0.85rem;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      .project-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 2rem;

        @media (max-width: 480px) {
          grid-template-columns: 1fr;
        }
      }
    }

    .footer {
      grid-column: span 2;
      grid-gap: 2rem;
      margin-bottom: 40px;

      button:first-child {
        width: 100%;
        max-width: 370px;
        margin-bottom: 65px;

        @media (max-width: 480px) {
          max-width: 100%;
          margin-bottom: 30px;
        }
      }
    }
  }
`

export const ProjectContainer = styled.div<ProjectProps>`
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding-top: 400px;

  > div {
    width: 100%;
    height: 100px;
    background-color: var(--white);
    
    h3 {
      margin-top: 18px;
      font-size: 1.4rem;
      font-weight: 700;

      a {
        color: var(--dark);
      }
    }

    p {
      margin-top: 10px;
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--dark);
    }
  }
`
