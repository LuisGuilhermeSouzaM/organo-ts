import './Jogo.css'

interface JogoProps {
    nome: string
    imagem: string
    cargo: string
    corDeFundo: string
    data: string
} 

const Jogo = ({ nome, imagem, cargo, corDeFundo, data }: JogoProps) => {
    return (<div className='jogo'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>{new Date(data).toLocaleDateString()}</h5>
        </div>
    </div>)
}

export default Jogo