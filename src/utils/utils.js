const inputPatterns ={
  videoTitle:"[A-Z]([A-z0-9_-]| )+ - [A-Z]([A-z0-9_-]| )+",
  videoUrl:"^https://(www.youtube.com/(watch[?]v?=)[A-Za-z0-9_-]+$|youtu.be/[A-Za-z0-9_-]+$)",
  categoryTitle:"[A-Z][A-Za-z]{1,19}"
}

const inputTitles ={
  videoTitle:'Nome da banda e da música separados por traço. A primeira letra de cada nome deve ser maiúscula. Apenas letras, números, "-" ou "_". Ex.: "Nome banda - Nome música"',
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
  let randomNumber = Math.floor(Math.random()*limit)
  if(randomNumber === initialIndex){
    randomNumber === limit ? randomNumber -= 1 : randomNumber += 1
  }
  return randomNumber
}

export{getYouTubeId, inputPatterns, inputTitles, indexRandomizer}