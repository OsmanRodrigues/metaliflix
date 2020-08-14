import {useState, useEffect} from 'react';
import { getCategories } from '../services/api';

const useForm =(initialValues)=>{
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) =>{
    const {value, name} = event.target
    setValues({...values, [name]: value})
  }

  const clearForm =()=> setValues(initialValues)

  return {values, setValues, handleChange, clearForm}
}

const useCategoriesList = (initialList) =>{

  const [categoriesList, setCategoriesList] = useState(initialList ? initialList : [])

  useEffect(()=>{
    getCategories()
    .then( async (response) =>{ 
      const categories = await response.data
      setCategoriesList(categories)
    }).catch(error =>{
      console.log(error.message)
      window.alert('Desculpe, não foi possível carregar a lista de categorias...')
    })
  }, [])

  const resetValues = () => setCategoriesList(initialList ? initialList : [])

  return {categoriesList, setCategoriesList, resetValues}
}

export{useForm, useCategoriesList}