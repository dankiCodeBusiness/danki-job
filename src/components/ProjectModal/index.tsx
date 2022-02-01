import React from 'react';
import Modal from 'react-modal';
import {Container} from './styles';

interface ModalProps {
    isOpen: boolean
}

export function ProjectModal({isOpen}: ModalProps) {

    return (
        <Modal isOpen={isOpen}>
            <Container>
                <h1>Modal</h1>
            </Container>
        </Modal>
    );

}
