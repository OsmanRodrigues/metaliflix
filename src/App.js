import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import VideoCardGroup from './components/Carousel';
import Footer from './components/Footer';
import DB from './data/dados_iniciais.json';

function App() {
  
  const mountCarousel = DB.categorias.map(category =>{
      const categoryIndex = DB.categorias.indexOf(category);

      return categoryIndex != 0 && <VideoCardGroup 
      ignoreFirstVideo = {false}
      category = {category} 
      />;
  });

  return (
    <div>
      <Menu/>

      <BannerMain
      videoTitle = {DB.categorias[0].videos[0].titulo}
      videoDescription = {DB.categorias[0].link_extra.text}
      url = {DB.categorias[0].videos[0].url}
      />
  
      {mountCarousel}

      <Footer/>
    </div>
  );
}

export default App;
