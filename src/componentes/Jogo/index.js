import './jogo.css'

const Jogo = ({ jogo, corDeFundo }) => {
    return (<div className="jogo">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={jogo.imagem} alt={jogo.nome} />
        </div>
        <div className="rodape">
            <h4>{jogo.nome}</h4>
            <h5>{jogo.cargo}</h5>
        </div>
    </div>)
}

export default Jogo