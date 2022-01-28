import React from 'react';
import {Container} from './styles';

interface Props {
    title: string
    outline?: boolean
}

export function Button({title, outline = false}: Props) {

    return (
        <Container outline={outline}>
            {title}
        </Container>
    );

}
