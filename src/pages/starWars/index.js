import './style.css';
import CardSW from '../../components/StarWarsComponents/cardSW';
import { useState } from 'react';

export default function StarWars() {
    const personagens = [
        {
            id: 1,
            nome: 'Luke Skywalker',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
        },
        {
            id: 2,
            nome: 'C-3PO',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/2.jpg'
        },
        {
            id: 3,
            nome: 'Darth Vader',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/4.jpg'
        },
        {
            id: 4,
            nome: 'Leia Organa',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/5.jpg'
        },
        {
            id: 5,
            nome: 'R2-D2',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/3.jpg'
        },
        {
            id: 6,
            nome: 'Obi-Wan Kenobi',
            imagem: 'https://starwars-visualguide.com/assets/img/characters/10.jpg'
        }
    ]

    const [filtrado, setFiltro] = useState(personagens);
    
    
    return (
        <div className="sw">
            <div className="sw-header">
                <img alt="star wars logo" src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237" />
            </div>
            <div className='sw-content'>
                <div className='sw-search'>
                    <h4>Buscador - <span>Star Wars</span></h4>
                    
                </div>
                <div className='sw-lista'>
                    {filtrado.map(person => {
                        return <CardSW value={person}/>
                    })}
                </div>
            </div>
        </div>
    )
}