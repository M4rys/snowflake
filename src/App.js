import React from 'react';
import Menu from './component/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './component/BannerMain';
import Carrousel from './component/Carousel';
import Footer from './component/Footer'

function App() {
  return (
    <div style= {{ background: "#141414"}}>
      <Menu/>

      <BannerMain
      videoTitle= {dadosIniciais.categorias[0].videos[0].titulo}
      url= {dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"o que e fontEnd"}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carrousel
        category={dadosIniciais.categorias[1]}
      />
      <Carrousel
      category={dadosIniciais.categorias[3]}
      />

    </div>
  );
}

export default App;
