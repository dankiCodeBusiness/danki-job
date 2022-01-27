import React from 'react';
import {Container} from './styles';
import Logo from '../../assets/images/logo-danki-2/logo-danki-2-x@2x.webp'
import {Link, NavLink} from "react-router-dom";

interface Props {
    data?: {
        title: string
        titleP: string
    }
}

export function Header({data}: Props) {

    return (
        <Container>
            <div className={'top'}>
                <span className={'dev'}>
                    <Link to={'/'}
                          className={'no-decoration'}
                          title={'Desenvolvedores'}>Desenvolvedores</Link>
                </span>
                <span className={'logo'}>
                    <Link to={'/'} title={'Desenvolvedores'}>
                        <img src={Logo} alt="Danki Job"/>
                    </Link>
                </span>
                <span className={'register'}>
                    <NavLink to="/cadastro" title={'Cadastrar meu Perfil'}>
                        Cadastrar meu Perfil
                    </NavLink>
                </span>
            </div>
            {data && <h1>{data?.title} <span>{data?.titleP}</span></h1>}
        </Container>
    );

}
