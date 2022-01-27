import React from 'react';
import {Container} from './styles';

export function Footer() {
    const dateYear = new Date().getFullYear()

    return (
        <Container>
            <p>Copyright © {dateYear}  Danki Code</p>
        </Container>
    );

}
