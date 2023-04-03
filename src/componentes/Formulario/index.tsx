import { useState } from 'react'
import { IJogo } from '../../compartilhado/interfaces/IJogo'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

interface FormularioProps {
    aoJogoCadastrado: (jogo: IJogo) => void
    categorias: string[]
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement> ) => {
        evento.preventDefault()
        props.aoJogoCadastrado({
            nome,
            cargo,
            imagem,
            categoria,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2>Preencha os dados para criar o card do jogo</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do jogo" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Tipo de jogo"
                    placeholder="Digite o tipo do jogo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    label='Data de lançamento do jogo'
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria" 
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario