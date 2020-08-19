import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import VideoCardGroup from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import {getAllContent} from '../../services/api';

const Home = () =>{
  const [content, setContent] = useState([])
  //TODO: mudar o index para variar
  const [randomIndex, setRandomIndex] = useState(0)
  
  const mountCarousel = content && content.map(category =>{
      return <VideoCardGroup 
      ignoreFirstVideo = {false}
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

  useEffect(()=>{
    //TODO: ajustar o limit
    if(content.length > 0){
      const limit = 4
      const indexRandomized = Math.floor(Math.random()*(limit-0) + 0)
      const adjust =()=> {
        if(indexRandomized === randomIndex){
          return indexRandomized === limit ? -1 : 1
        }
        return 0
      }
      
      window.setTimeout(()=>setRandomIndex((indexRandomized + adjust())), 10000)
    }
  },[content, randomIndex])
  
  return (
    <PageDefault showButtonLink>
      {
        content.length > 0 &&
        <BannerMain
        videoTitle = {content[randomIndex].videos[randomIndex].titulo}
        videoDescription = {content[randomIndex].link_extra.text}
        url = {content[randomIndex].videos[randomIndex].url}
        />
      }
      {mountCarousel}
    </PageDefault>
  );
}
export default Home;
