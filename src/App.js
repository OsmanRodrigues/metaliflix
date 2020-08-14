import React, { useEffect, useState } from 'react';
import BannerMain from './components/BannerMain';
import VideoCardGroup from './components/Carousel';
import PageDefault from './components/PageDefault';

import {getAllContent} from './services/api';

import dotenv from 'dotenv';

function App() {

  dotenv.config()

  const [content, setContent] = useState(null)
  
  const mountCarousel = content && content.map(category =>{
      return <VideoCardGroup 
      ignoreFirstVideo = {true}
      category = {category} 
      />;
  });

  useEffect(()=>{
    getAllContent()
    .then( async (response) =>{ 
      const allContent = await response.data
      setContent(allContent)
    }).catch(error =>{
      console.log(error.message)
      window.alert('Desculpe, não foi possível carregar os vídeos...')
    })
  }, [])

  return (
    <PageDefault>
      {
        content &&
        <BannerMain
        videoTitle = {content[0].videos[0].titulo}
        videoDescription = {content[0].link_extra.text}
        url = {content[0].videos[0].url}
        />
      }
      {mountCarousel}
    </PageDefault>
  );
}

export default App;
