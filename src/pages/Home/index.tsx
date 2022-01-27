import React from 'react';
import {Container} from './styles';
import avatar from '../../assets/images/avatar.jpeg'
import placeholderPng from '../../assets/images/placeholder.png'
import {Filter} from "../../components/Filter";
import {Link} from "react-router-dom";
import {Header} from "../../components/Header";
import {Background} from "../../components/Background";
import {Helmet} from "react-helmet";

interface DevProps {
    id: number
    name: string
    avatar: string
    cover: string
}

export function Home() {

    const devs: DevProps[] = [
        {id: 1, name: 'Rafael Pacífico', avatar, cover: placeholderPng},
        {id: 2, name: 'Carol Pacífico', avatar, cover: placeholderPng},
        {id: 3, name: 'Diana Pacífico', avatar, cover: placeholderPng},
        {id: 4, name: 'Silvana Pacífico', avatar, cover: placeholderPng},
        {id: 5, name: 'Eduarda Pacífico', avatar, cover: placeholderPng},
        {id: 6, name: 'Vovô Pacífico', avatar, cover: placeholderPng},
        {id: 7, name: 'Vovó Pacífico', avatar, cover: placeholderPng},
        {id: 8, name: 'Tia Pacífico', avatar, cover: placeholderPng},
    ]

    return (
        <>
            <Helmet>
                <title>Encontre os Melhores Desenvolvedores do Mundo!</title>
                <meta name="description" content="Encontre os Melhores Desenvolvedores do Mundo aqui na Danki Job, somente os melhores!" />
            </Helmet>
            <Header data={{title: 'Encontre os', titleP: 'Melhores Desenvolvedores do Mundo!'}}/>
            <Background>
                <Filter/>
                <Container>
                    {devs.map(item => (
                        <div key={item.id} className={'dev-box'}>
                            <Link to={`perfil/${item.id}`}>
                                <img src={item.cover} alt={item.name}/>
                            </Link>
                            <div>
                                <img src={avatar} alt={item.name}/>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    ))}
                </Container>
            </Background>
        </>
    );

}
