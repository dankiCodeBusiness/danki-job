import React from 'react';
import {Container} from './styles';

export function Filter() {

    const filters = [
        'Todos',
        'Games',
        'Font End',
        'Back End',
        'Mobile',
        'Blockchain',
        'Outros',
    ]

    return (
        <Container>
            {filters.map((item, index) => (<button key={index} type={"button"}>{item}</button>))}
        </Container>
    );

}
