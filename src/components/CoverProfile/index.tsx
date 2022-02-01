import React from 'react';
import {Container} from './styles';
import CoverJpg from '../../assets/images/cover-profile.jpeg'
import {Button} from "../Button";

export function CoverProfile() {

    return (
        <Container file={CoverJpg}>
            <div>
                <Button title={'Editar capa'} handleAction={() => {}} />
            </div>
        </Container>
    );

}
