import React from 'react';
import {Container} from './styles';
import {useParams} from "react-router-dom";
import {Header} from "../../components/Header";
import {Background} from "../../components/Background";

export function Profile() {
    const {profileId} = useParams()

    return (
        <Container>
            <Header />

            <Background>
                <h1>Profile {profileId}</h1>
            </Background>
        </Container>
    );

}
