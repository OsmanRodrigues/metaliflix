import React, { useEffect, useState } from 'react';
import BannerMain from './components/BannerMain';
import VideoCardGroup from './components/Carousel';
import PageDefault from './components/PageDefault';

function App() {
  const [categories, setCategories] = useState(null)
  
  const mountCarousel = categories && categories.map(category =>{
      return <VideoCardGroup 
      ignoreFirstVideo = {true}
      category = {category} 
      />;
  });

  useEffect(()=>{
    //configurar custom instance com axios
    const DB_URL = 'http://localhost:8080/categorias?_embed=videos' 
    fetch(DB_URL).then(async(r)=>{
      const response = await r.json();
      setCategories(response)
    })
  }, [])
  return (
    <PageDefault>
      {
        categories &&
        <BannerMain
        videoTitle = {categories[0].videos[0].titulo}
        videoDescription = {categories[0].link_extra.text}
        url = {categories[0].videos[0].url}
        />
      }
      {mountCarousel}
    </PageDefault>
  );
}

export default App;
