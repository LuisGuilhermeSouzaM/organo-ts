import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({aoCadastrar, categorias}) => {

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, tipo, imagem, categoria )
        aoCadastrar({
            nome,
            tipo,
            imagem,
            categoria
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do jogo.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do jogo '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Tipo' 
                    placeholder='Digite o tipo do jogo'
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}/>
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='categorias'
                    items={categorias} 
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}/>
                <Botao texto='Criar card' />
            </form>
        </section>
    )
}

export default Formulario