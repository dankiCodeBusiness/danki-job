import React from 'react'
import Modal from 'react-modal'
import { Container } from './styles'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
}

export function ProjectModal({ isOpen, closeModal }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
      onRequestClose={closeModal}
    >
      <button type={"button"} onClick={closeModal} className={'react-modal-close'}>
        <span>&times;</span>
      </button>
      <Container>
        <h1>Modal</h1>
      </Container>
    </Modal>
  )
}
