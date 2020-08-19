const inputPatterns ={
  videoTitle:"[A-Z]([A-z0-9_-]| )+*",
  videoUrl:"^https://(www.youtube.com/(watch[?]v?=)[A-Za-z0-9_-]+$|youtu.be/[A-Za-z0-9_-]+$)",
  categoryTitle:"[A-Z][A-Za-z]{1,19}"
}

const inputTitles ={
  videoTitle:'Apenas letras, números, traço ou underline. No mínimo 3 caracteres e a primeira maiúscula.',
  videoUrl:'Apenas URLs do Youtube válidas.',
  videoCategory:'Apenas as categorias sugeridas. Cadastre nova categoria caso deseje outra.',
  categoryTitle:'Apenas letras. No mínimo 4 e a primeira deve ser maiúscula.',
  categoryDescription:'No mínimo 30 e no máximo 120 caracteres'
}

const getYouTubeId = (youtubeURL) =>{
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

const indexRandomizer =(initialIndex, limit)=>{
  const randomNumber = Math.floor(Math.random()*(limit-0) + 0)
  const adjust =()=> {
    if(randomNumber === initialIndex){
      return randomNumber === limit ? -1 : 1
    }
    return 0
  }

  return randomNumber + adjust()
}

export{getYouTubeId, inputPatterns, inputTitles, indexRandomizer}