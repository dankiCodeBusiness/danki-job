import React, { FormEvent } from 'react'
import Modal from 'react-modal'
import { Container, ProjectCotainer } from './styles'
import { Button } from '../Button'
import { FormControll } from '../FormControll'
import TrashSvg from '../../assets/images/trash.png'
import placeholder from '../../assets/images/placeholder.png'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

export function ProjectModal({ isOpen, closeModal }: ModalProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log('submit')
  }

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
      <Container onSubmit={handleSubmit}>
        <div className="form-container">
          <FormControll
            labelName={'name_project'}
            labelText={'Nome do projeto em poucas palavvras'}
          >
            <input
              type={'text'}
              name={'name_project'}
              id={'name_project'}
              placeholder={'Ex.: Site para empresa Danki'}
            />
          </FormControll>
          <FormControll
            labelName={'url_project'}
            labelText={'Url para o projeto (opcional)'}
          >
            <input
              type={'url'}
              name={'url_project'}
              id={'url_project'}
              placeholder={'https://'}
            />
          </FormControll>
          <FormControll
            labelName={'description_project'}
            labelText={'Descrição do projeto'}
          >
            <textarea
              name={'description_project'}
              id={'description_project'}
              rows={5}
            />
          </FormControll>
        </div>
        <div className="project-container">
          <ProjectCotainer backgroundImage={placeholder}>
            <button type={"button"}>
              <img src={TrashSvg} alt="Remover imagem" />
            </button>
          </ProjectCotainer>
          <ProjectCotainer backgroundImage={placeholder}>
            <button type={"button"}>
              <img src={TrashSvg} alt="Remover imagem" />
            </button>
          </ProjectCotainer>
        </div>
        <div className="button-container">
          <Button title={'Adicionar imagem'} outline handleAction={() => {}} />
          <Button
            title={'Excluir projeto'}
            type={'submit'}
            handleAction={() => {}}
            color={'--red-200'}
          />
          <Button title={'Publicar projeto'} handleAction={() => {}} />
        </div>
      </Container>
    </Modal>
  )
}
