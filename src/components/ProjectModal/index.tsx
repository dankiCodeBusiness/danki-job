import React, { FormEvent, useRef, useState } from 'react'
import Modal from 'react-modal'
import { Container, ProjectCotainer } from './styles'
import { Button } from '../Button'
import { FormControll } from '../FormControll'
import TrashSvg from '../../assets/images/trash.png'
import placeholder from '../../assets/images/placeholder.png'
import { v4 as uuidV4 } from 'uuid'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

interface ProjectImageProps {
  id: string
  name: string
  path: string
}

export function ProjectModal({ isOpen, closeModal }: ModalProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [projectImages, setProjectImages] = useState<ProjectImageProps[]>([])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log('submit')
  }

  function onFileChangeCapture(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files)
    if (!event.target.files || event.target.files.length === 0) {
      setProjectImages([])
      return false
    }
    const reader = new FileReader()
    const file = event.target.files[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setProjectImages([
        ...projectImages,
        {
          id: String(uuidV4()),
          name: file.name,
          path: String(reader.result)
        }
      ])
    }
  }

  function handleOpenInputFile() {
    if (inputFileRef.current !== null) inputFileRef.current.click()
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
          {projectImages.length ? (
            projectImages.map((item) => (
              <ProjectCotainer
                backgroundImage={item.path ?? placeholder}
                key={item.id}
              >
                <button type={'button'}>
                  <img src={TrashSvg} alt="Remover imagem" />
                </button>
              </ProjectCotainer>
            ))
          ) : (
            <p>Adicione imagens ao seu projeto.</p>
          )}
        </div>
        <div className="button-container">
          <input
            type="file"
            name={'files'}
            hidden
            ref={inputFileRef}
            onChangeCapture={onFileChangeCapture}
          />
          <Button
            title={'Adicionar imagem'}
            outline
            handleAction={handleOpenInputFile}
          />
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
