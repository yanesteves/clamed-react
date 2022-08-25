// Importo a classe de estilos
import './style.css';
// Faço a importação do Card dos personagens
import CardSW from '../../components/StarWarsComponents/cardSW';
import { useEffect, useState } from 'react';

export default function StarWars() {
    // Utilizo um array pré-definido para popular os cards
    const personagens = [
        {
            id: 1,
            nome: 'Luke Skywalker',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
            tipo: 'humano'
        },
        {
            id: 2,
            nome: 'C-3PO',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/2.jpg',
            tipo: 'robo'
        },
        {
            id: 3,
            nome: 'Darth Vader',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/4.jpg',
            tipo: 'humano'
        },
        {
            id: 4,
            nome: 'Leia Organa',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/5.jpg',
            tipo: 'humano'
        },
        {
            id: 5,
            nome: 'R2-D2',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/3.jpg',
            tipo: 'robo'
        },
        {
            id: 6,
            nome: 'Obi-Wan Kenobi',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/10.jpg',
            tipo: 'humano'
        }
    ]

    // Declaro um useState para receber de inicio a lista de personagens, 
    // este useState será utilizado depois para filtrar por nome dos personagens.
    // o método setFiltro receberá a resposta do filtro aplicado em personagens.
    const [filtrado, setFiltro] = useState(personagens);

    // Declaro um useState para controle dos termos digitados pelo usuário
    const [termo, setTermo] = useState('')

    // useEffect com uma condição de execução, neste caso será executado sempre que existir uma mudança na variável "termo"
    // Se houver a mudança, será chamado o método setFiltro com a resposta da busca de itens que condizem com o valor digitado pelo usuário    
    useEffect(() => {
        setFiltro(
            // É aplicado um filter para retornar os dados condizentes e utilizo toLocaleLowerCase para garantir os dois nomes em minusculo.
            // o indexOf retorna -1 caso o termo não esteja presente no nome do personagem.
            personagens.filter(item => (item.nome.toLocaleLowerCase()).indexOf(termo.toLocaleLowerCase()) !== -1)
        )
    }, [termo])

    return (
        <div className="sw">
            <div className="sw-header">
                <img alt="star wars logo" src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237" />
            </div>
            <div className='sw-content'>
                <div className='sw-search'>
                    <h4>Buscador - <span>Star Wars</span></h4>
                    <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder='Digite o nome do personagem a ser buscado...'></input>
                </div>
                <div className='sw-lista'>
                    {/* A partir da variável "filtrado" definida por useState, 
                    eu realizo o map e o retorno dele será o card populado com 
                    os dados do objeto personagem.

                    Tenho a opção também de passar o nome das propriedades com maior declaração como na parte comentada.
                    */}
                    {filtrado.map(person => {
                        return <CardSW value={person}/>
                    })}

                    {/* Se testar este modo, será necessário atualizar o componente chamado para receber nome e imagem */}
                    {/* {filtrado.map(person => {                         
                        return <CardSW nome={person.nome} imagem={person.imagem} />
                    })} */}
                </div>
            </div>
        </div>
    )
}