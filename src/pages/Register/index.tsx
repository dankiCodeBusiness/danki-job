import React, {FormEvent} from 'react';
import {Container} from './styles';

import {Background} from "../../components/Background";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";
import {FormControll} from "../../components/FormControll";

export function Register() {
    const dataTitle = {title: 'Bem-Vindo(a) ao', titleP: 'Banco De Talentos da Danki Code'}
    const navigation = useNavigate()

    function handleRegister(event: FormEvent) {
        event.preventDefault()
        navigation('/minha-conta')
    }

    return (
        <>
            <Helmet>
                <title>Bem-Vindo(a) ao Banco De Talentos da Danki Code</title>
                <meta name="description"
                      content="Bem-Vindo(a) ao Banco De Talentos da Danki Code, cadastre-se e seja encontrado por milhares de empresas."/>
            </Helmet>
            <Header data={dataTitle}/>

            <Background>
                <Container>
                    <form action="" onSubmit={handleRegister} method={'post'}>

                        <FormControll labelName={'name'} labelText={'Nome'}>
                            <input type={"text"} id={'name'} placeholder={'Digite seu nome completo'}/>
                        </FormControll>

                        <FormControll labelName={'email'} labelText={'E-mail'}>
                            <input type={"email"} id={'email'} placeholder={'Digite o seu melhor e-mail'}/>
                        </FormControll>

                        <FormControll labelName={'password'} labelText={'Senha'}>
                            <input type={"password"} id={'password'} placeholder={'Mínimo de 6 caractéres'}/>
                        </FormControll>

                        <div className={'btnContainer'}>
                            <Button title={'Finalizar meu cadastro'} handleAction={() => {}}/>
                        </div>
                    </form>
                </Container>
            </Background>
        </>
    );

}
