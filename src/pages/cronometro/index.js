import { useEffect, useState } from 'react';

export default function Cronometro() {

    const [timer, setTimer] = useState(0)
    
    function iniciarContagem() {
        setInterval(() => {
            setTimer((prev) => prev+1)
        }, 1000);
    }

    function pararContagem() {
        // Como parar a contagem?
        // Dica, o setInterval retorna um ID da contagem e a partir dela podemos parar.
        // Documentação: https://www.w3schools.com/jsref/met_win_setinterval.asp
    }

    useEffect(() => {
        console.log('- renderizando -')
    })
    
    return (
        <div style={{'display': 'block', 'width': '240px','margin': '0 auto', 'textAlign': 'center', 'transform': 'scale(2) translateY(50%)'}}>
            <h2>{timer}</h2>
            <button onClick={iniciarContagem}>Iniciar</button>
            <button onClick={pararContagem}>Parar</button>
        </div>
    );      
}