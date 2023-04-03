import React from 'react'
import { IJogo } from '../../compartilhado/interfaces/IJogo'
import Jogo from '../Jogo'
import './Categoria.css'

interface CategoriaProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    jogos: IJogo[]
}

const Categoria = (props: CategoriaProps) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.jogos.length > 0) ? <section className='categoria' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='jogos'>
                {props.jogos.map(jogo => 
                    <Jogo 
                        corDeFundo={props.corPrimaria} 
                        key={jogo.nome} 
                        nome={jogo.nome} 
                        cargo={jogo.cargo} 
                        imagem={jogo.imagem}
                        data={jogo.data}
                    /> )}
            </div>
        </section> 
        : <></>
    )
}

export default Categoria