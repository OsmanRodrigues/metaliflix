import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import VideoCardGroup from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

import {getAllContent} from '../../services/api';
import { indexRandomizer } from '../../utils/utils';

const Home = () =>{
  const [content, setContent] = useState([])
  const [randomIndex, setRandomIndex] = useState(0)
  
  const mountCarousel = content && content.map((category, index) =>{
      return <VideoCardGroup
      key={index} 
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
      window.alert('Desculpe, não foi possível carregar os vídeos...')
    })
  }, [])

  useEffect(()=>{
    if(content.length > 0){
      const indexRandomized = indexRandomizer(randomIndex, content.length -1)
      window.setTimeout(()=>setRandomIndex((indexRandomized)), 15000)
    }
  },[content, randomIndex])
  
  return (
    <PageDefault showbuttonlink>
      {
        content.length > 0 &&
        <BannerMain
        videoTitle = {content[randomIndex].titulo}
        videoDescription = {content[randomIndex].link_extra.text}
        url = {content[randomIndex].videos[indexRandomizer(
          content[randomIndex].videos.length,
          content[randomIndex].videos.length
        )].url}
        />
      }
      {mountCarousel}
    </PageDefault>
  );
}
export default Home;
