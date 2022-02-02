import styled from 'styled-components'

interface ProjectContainerProps {
  backgroundImage: string
}

export const Container = styled.form`
  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;

    div:last-child {
      grid-column: span 2;
    }
  }

  .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
  }

  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
  }
`

export const ProjectCotainer = styled.div<ProjectContainerProps>`
  width: 100%;
  max-width: 530px;
  height: 330px;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  background-position: center;
  background-size: cover;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    border: none;
    background: transparent;
  }
`
