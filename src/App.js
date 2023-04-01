import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Categoria from "./componentes/Categoria";

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

  const inicial = [
    {
      nome: 'Starfield',
      tipo: 'RPG espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[0].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG de ação e aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1632841000',	
      categoria: categorias[0].nome
    },
    {
      nome: 'The Elder Scrolls v: Skyrim',
      tipo: 'RPG de Ação e aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1632841000',
      categoria: categorias[0].nome
    },
    {
      nome: 'Redfall',
      tipo: 'FPS mundo aberto de ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1294810/header.jpg?t=1680014869',		
      categoria: categorias[1].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[1].nome
    },
    {
      nome: 'The Elder Scrolls v: Skyrim',
      tipo: 'RPG de Ação e aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1632841000',
      categoria: categorias[1].nome
    },
    {
      nome: 'The Witcher 3',
      tipo: 'RPG de ação e aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1632841000',	
      categoria: categorias[2].nome
    },
    {
      nome: 'Redfall',
      tipo: 'FPS mundo aberto de ação e Aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1294810/header.jpg?t=1680014869',		
      categoria: categorias[2].nome
    },
    {
      nome: 'Starfield',
      tipo: 'RPG espacial',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1678388477',
      categoria: categorias[2].nome
    },
    {
      nome: 'The Elder Scrolls v: Skyrim',
      tipo: 'RPG de Ação e aventura',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/72850/header.jpg?t=1632841000',
      categoria: categorias[2].nome
    },
  ]

  const [jogos, setJogos] = useState(inicial)


  return (
    <div>
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoCadastrar={jogo => setJogos([...jogos, jogo])} />
      <section className="categoria">
        <h1>Minha organização</h1>
        {categorias.map((categoria, indice) => <Categoria key={indice} categoria={categoria} jogos={jogos.filter(jogo => jogo.categoria === categoria.nome)} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
