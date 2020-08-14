import axios from 'axios';

const api = axios.create({
  baseURL: String(process.env.REACT_APP_API_BASE_URL)
})

const getAllContent = async () =>{
  const response = await api.get('/categorias?_embed=videos')
  return response
}

const getCategories = async () =>{
  const response = await api.get('/categorias')
  return response
}

export{api, getAllContent, getCategories}