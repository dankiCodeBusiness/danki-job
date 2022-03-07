import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'
import { IProfileProps } from '../../pages/Profile'
import {Button} from "../Button";

interface IDisplayProjectModalProps {
  closeModal: () => void
  isOpen: boolean
  projectId?: string
  project: IProfileProps
}

export function DisplayProjectModal({
  closeModal,
  isOpen,
  project
}: IDisplayProjectModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
      onRequestClose={closeModal}
    >
      <button
        type={'button'}
        onClick={closeModal}
        className={'react-modal-close'}
      >
        <span>&times;</span>
      </button>
      <Container>
        <article>
          <img src={project.avatar} alt={project.full_name} />
          <header>
            <h1>{project.full_name}</h1>
            <h2>Desenvolvedor(a)</h2>
          </header>
        </article>
        <section>
          <header>
            <h2>{project.projects[0].title}</h2>
            <p>{project.projects[0].description}</p>
            <p>
              <a href="https://google.com" rel={'noreferrer'} target={'_blank'}>
                https://google.com
              </a>
            </p>
          </header>
          <div>
            {
              project.projects[0].images.map((image, id) => (
                  <img src={image.url} alt="" key={id}/>
              ))
            }
          </div>
        </section>
        <section>
          <div>
            <Button
                title={'Entrar em contato via email'}
                handleAction={() => {}}
            />
            <Button
                title={'Chamar no WhatsApp'}
                outline
                handleAction={() => {}}
            />
          </div>
        </section>
      </Container>
    </Modal>
  )
}
