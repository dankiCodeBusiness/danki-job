import React from 'react';
import {Container} from './styles';
import {Helmet} from "react-helmet";
import {Header} from "../../components/Header";
import {Background} from "../../components/Background";
import {CoverProfile} from "../../components/CoverProfile";
import {FormControll} from "../../components/FormControll";
import {Button} from "../../components/Button";

import avatar from '../../assets/images/avatar.jpeg'
import placeholder from '../../assets/images/placeholder.png'
import ImageUploadPNG from '../../assets/images/imageupload.png'

export function MyAccount() {

    return (
        <>
            <Helmet>
                <title>Minha conta na Danki Job</title>
                <meta name={'description'}
                      content={'Minha conta na Danki Job, se ainda não possui uma conta, crie a sua agora.'}/>
            </Helmet>
            <Header/>
            <CoverProfile/>

            <Background>
                <Container>

                    <form action="">
                        <div className="picture">
                            <div>
                                <button type={"button"}>
                                    <img src={ImageUploadPNG} alt="Upload"/>
                                </button>
                            </div>
                            <img src={avatar} className={'img-avatar'} alt="Olá você"/>
                        </div>
                        <div className="container-form">
                            <FormControll labelName={'name'} labelText={'Nome'}>
                                <input type="text" id={'name'} placeholder={'Digite seu nome completo'}/>
                            </FormControll>
                            <FormControll labelName={'email'} labelText={'E-mail'}>
                                <input type="email" id={'email'} placeholder={'Degite um e-mail válido'}/>
                            </FormControll>
                            <FormControll labelName={'mobile_number'} labelText={'whatsapp (opcional)'}>
                                <input type="text" id={'mobile_number'} placeholder={'+55 11 99999 9999'}/>
                            </FormControll>
                        </div>
                        <div className="about">
                            <FormControll labelName={'about'} labelText={'Sobre você'}>
                                <textarea name={'about'} id={'about'} rows={5}
                                          placeholder={'Escreva um resumo sobre sua carreira'}/>
                            </FormControll>
                        </div>
                        <div className="skills">
                            <h2>Habilidades</h2>
                            <div>
                                <input type="checkbox" id={'frontend'} name={'frontend'}/>
                                <label htmlFor="frontend">Front-End</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'backend'} name={'backend'}/>
                                <label htmlFor="backend">Back-End</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'games'} name={'games'}/>
                                <label htmlFor="games">Games</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'mobile'} name={'mobile'}/>
                                <label htmlFor="mobile">Mobile</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'blockchain'} name={'blockchain'}/>
                                <label htmlFor="blockchain">Blockchain</label>
                            </div>
                        </div>
                        <div className="projects">
                            <h2>Projetos</h2>
                            <div>
                                <img src={placeholder} alt="Project name"/>
                                <h3><a href="https://google.com">Nome do projeto</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consectetur
                                    iste reprehenderit ut. Autem, debitis eligendi iusto magnam non optio pariatur
                                    possimus quos, sapiente unde vel voluptatem. Error, veritatis.</p>
                            </div>
                            <div>
                                <img src={placeholder} alt="Project name"/>
                                <h3><a href="https://google.com">Nome do projeto</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consectetur
                                    iste reprehenderit ut. Autem, debitis eligendi iusto magnam non optio pariatur
                                    possimus quos, sapiente unde vel voluptatem. Error, veritatis.</p>
                            </div>
                        </div>
                        <div className="footer">
                            <Button title={'Adicionar novo projeto'}/>
                            <Button title={'Ver meu perfil público'} outline/>
                        </div>
                    </form>

                </Container>
            </Background>
        </>
    );

}
