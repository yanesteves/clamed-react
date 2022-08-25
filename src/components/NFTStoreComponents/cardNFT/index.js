import './style.css';

export default function CardNFT({ value }) {
    return (
        <div className='nft-card'>
            <div className='nft-card-header'>
                <div className='nft-user'>                    
                    <img alt={'foto '+value.nome} src={value.foto_perfil}></img>
                    {value.nome}
                    <span className='nickuser text-muted'>{value.nickcriador}</span>
                </div>
            </div>
            <div className='nft-card-content'>
                <div className='nft-action'>
                    {/* like */}
                </div>
                <img alt={'Poster nft de '+value.nome} src={value.imagem}></img>
            </div>
            <div className='nft-card-footer'>
                <div className='nft-price'>
                    <span className='real'>(R${value.precoreal})</span>
                    {/* <i className='fab fa-ethereum'></i> */}
                    {value.preco} ETH
                </div>
                <div className='nft-time'>
                    <span>3 dias restantes</span>
                </div>
            </div>
            
        </div>
    )
}