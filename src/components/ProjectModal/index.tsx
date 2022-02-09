import React, { FormEvent, useRef, useState } from 'react'
import Modal from 'react-modal'
import { Container, ProjectCotainer } from './styles'
import { Button } from '../Button'
import { FormControll } from '../FormControll'
import TrashSvg from '../../assets/images/trash.png'
import placeholder from '../../assets/images/placeholder.png'
import { v4 as uuidV4 } from 'uuid'
import {ProjectImageProps, ProjectProps} from '../../pages/MyAccount'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  handle: (data: ProjectProps) => void
}

export function ProjectModal({ isOpen, closeModal, handle }: ModalProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [projectImages, setProjectImages] = useState<ProjectImageProps[]>([])
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectUrl, setProjectUrl] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (projectImages.length === 0) {
      return alert('Adicione uma imagem ao projeto.')
    }
    handle({
      id: uuidV4(),
      name: projectName,
      description: projectDescription,
      url: projectUrl,
      images: projectImages
    })

    setProjectImages([])
    closeModal()
  }

  function onFileChangeCapture(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
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

  function handleRemoveProjectImage(id: string) {
    setProjectImages(projectImages.filter((image) => image.id !== id))
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
              onChange={(event) => setProjectName(event.target.value)}
              required={true}
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
              onChange={(event) => setProjectUrl(event.target.value)}
              required={true}
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
              onChange={(event) => setProjectDescription(event.target.value)}
              required={true}
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
                <button
                  type={'button'}
                  onClick={() => handleRemoveProjectImage(item.id)}
                >
                  <img src={TrashSvg} alt="Remover imagem" />
                </button>
              </ProjectCotainer>
            ))
          ) : (
            <p></p>
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
            type={"button"}
            handleAction={handleOpenInputFile}
          />
          <Button
            title={'Excluir projeto'}
            type={'button'}
            handleAction={() => {}}
            color={'--red-200'}
          />
          <Button title={'Publicar projeto'} type={"submit"} handleAction={() => handleSubmit} />
        </div>
      </Container>
    </Modal>
  )
}
