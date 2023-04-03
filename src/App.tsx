import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

import Banner from './componentes/Banner';
import { IJogo } from './compartilhado/interfaces/IJogo';

function App() {

  const categorias = [
    {
      nome: 'RPG',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'FPS',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Ação e Aventura',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
  ]


  const [jogos, setJogoes] = useState<IJogo[]>([])

  const aoNovoJogoAdicionado = (jogo: IJogo) => {
    setJogoes([...jogos, jogo])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.svg'/>
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoJogoCadastrado={jogo => aoNovoJogoAdicionado(jogo)}/>

      {categorias.map(categoria => <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria} 
        corSecundaria={categoria.corSecundaria} 
        jogos={jogos.filter(jogo => jogo.categoria === categoria.nome)}
      />)}   

    </div>
  );
}

export default App;
