import Jogo from '../Jogo'
import './Categoria.css'

const Categoria = ({ categoria, jogos }) => {
    return (

        jogos.length > 0 && <section className='categoria' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: categoria.corPrimaria }}>
            <h3 style={{ borderColor: categoria.corSecundaria }}>{categoria.nome}</h3>
            <div className='jogos'>
                {jogos.map((jogo, indice) => <Jogo key={indice} jogo={jogo} corDeFundo={categoria.corSecundaria} />)}
            </div>
        </section>

    )
}

export default Categoria