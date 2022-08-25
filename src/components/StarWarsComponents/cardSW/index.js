import './style.css';

// Declaro e exporto o componente e informo que um parametro será recebido.
// Utilizo { value } pois declaro no componente pai que este card receberá value={personagem}.
// Caso for alterar para o modelo com maior declaração, adicione as propriedades no lugar de { value }
export default function CardSW({ value }) {
    return (
        <div className='sw-card'>           
            <div className='sw-card-content'>
                <div className='sw-action'>
                    {/* like */}
                </div>
                <img alt={'Personagem '+value.nome} src={value.imagem}></img>
            </div>
            <div className='sw-card-footer'>
                {value.nome}
            </div>
            
        </div>
    )
}