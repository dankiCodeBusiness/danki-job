import React from 'react';
import {Container} from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
    outline?: boolean
    handleAction: () => void
}

export function Button({title, handleAction, outline = false, ...rest}: Props) {

    return (
        <Container outline={outline} onClick={handleAction} {...rest}>
            {title}
        </Container>
    );

}
