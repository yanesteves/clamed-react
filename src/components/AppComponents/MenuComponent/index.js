import '../../../App.css';
import './style.css';
import React from 'react';

export default function Menu() {
    const routes = [
        {
            path: 'basic/exemplo1-hook',
            name: 'Exemplo - Hook - useState',
            description: 'Exemplo com useState e useEffect.'
        },
        {
            path: 'basic/exemplo1-class-based',
            name: 'Exemplo - Class Based - this.state',
            description: 'Exemplo em classe baseado no componente funcional \'Exemplo Hook - useState\'.'
        },
        {
            path: 'basic/exemplo2',
            name: 'Exemplo - useState x variável local',
            description: 'Comparando funcionamento do useState e variável local.'
        },
        {
            path: 'basic/exemplo3',
            name: 'Exemplo - useRef x variável local',
            description: 'Comparando funcionamento do useRef e variável local.'
        },
        {
            path: 'basic/exemplo4',
            name: 'Exemplo - useRef para manter o valor anterior',
            description: 'Utilizando o useRef para armazenar o valor anterior da contagem.'
        },
        {
            path: 'apps/cronometro',
            name: 'Cronometro',
            description: 'Exemplo de cronômetro com Start e Pause com useState e useRef.'
        },
        {
            path: 'apps/star-wars',
            name: 'Star Wars',
            description: 'Listagem e busca de personagens dos Star Wars com useState e useEffect.'
        },
        {
            path: 'apps/nft-store',
            name: 'NFT Store',
            description: 'Listagem de NFTs e busca por categoria de NFT, com useState e useEffect.'
        },
        {
            path: 'apps/github-integration',
            name: 'Github Integration',
            description: 'Integração com a API para retorno de usuários do Github. useState, useEffect e Fetch'
        },
        // {
        //     path: '/exercicio/s09e01',
        //     name: 'Exercício 01',
        //     description: 'Exemplo com useState e useEffect.'
        // },
        // {
        //     path: '/exercicio/s09e02',
        //     name: 'Exercício 02',
        //     description: 'Exemplo com useState e useEffect.'
        // },
        // {
        //     path: '/exercicio/s09e03',
        //     name: 'Exercício 03',
        //     description: 'Exemplo com useState e useEffect.'
        // },
        // {
        //     path: '/exercicio/s09e04',
        //     name: 'Exercício 04',
        //     description: 'Exemplo com useState e useEffect.'
        // },
        {
            path: '/exercicio/s09e05',
            name: 'Exercício 05',
            description: 'Com o hook useRef, crie um código que simule o evento "focus" do input.'
        },
        // {
        //     path: '/exercicio/s09e06',
        //     name: 'Exercício 06',
        //     description: 'Exemplo com useState e useEffect.'
        // },
        {
            path: '/exercicio/s09e07',
            name: 'Exercício 07',
            description: 'Construir uma página de download e simular barra de progresso.'
        },
        // {
        //     path: '/exercicio/s09e08',
        //     name: 'Exercício 08',
        //     description: 'Exemplo com useState e useEffect.'
        // },
        {
            path: '/exercicio/s09e09',
            name: 'Exercício 09',
            description: 'Converta um "Class Based Component" para Hooks.'
        },
        {
            path: '/exercicio/s09e10',
            name: 'Exercício 10',
            description: 'Crie um componente que identifique e mostre em tela que você está escrevendo no input.'
        }        
    ]
    return (
        <div style={{
            'display': 'flex', 'flexDirection': 'column', 'maxWidth': '520px', 'padding': '20px'
        }}>
            {routes.map(route => {
                return (
                    <div key={route.path} className='route-definition'>
                        <h6 className='capitalize'>{route.name}</h6>
                        <span className='text-muted f-14'>{route.description}</span>
                        <a className='d-block f-14' href={route.path}>Acessar</a>
                    </div>
                )
            })}
        </div>
    )
}