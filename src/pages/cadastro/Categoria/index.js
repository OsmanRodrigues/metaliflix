import React, {useEffect, useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import { ButtonLink } from '../../../components/Menu/styles';
import {
  FormFieldWrapper, Label, Input
} from './styles';
import{useForm} from '../../../hooks/hooks';

const CadastroCategoria = () =>{
  const history = useHistory()
  const initialValues = {
    currentCategory: '',
    description: '',
    color: '#000'
  }

  const {values, clearForm, handleChange} = useForm(initialValues)
  const [categories, setCategories] = useState([])
  
  const handleSubmit = (event)=>{
    console.log('submeteu')
    event.preventDefault()
    clearForm()
    history.push('/')
  }
 
  useEffect(()=>{
    const DB_URL = 'http://localhost:8080/categorias' 
    fetch(DB_URL).then(async(r)=>{
      const response = await r.json();
      setCategories(response)
    })
  }, [])

  return(
    <PageDefault>
      
      <h1>Cadastro da categoria: {values.currentCategory} </h1>
        {/* TODO: analisar comportamento do onsubmit */}
      <form onSubmit={handleSubmit}>
        <FormFieldWrapper>
          <Label htmlFor='1'>
            <Input
            id='1'
            name='currentCategory'
            type='text'
            value={values.currentCategory}
            onChange={handleChange}
            />
            <Label.Text>
            Nome da categoria:
            </Label.Text> 
          </Label>
        </FormFieldWrapper>
        
        <FormFieldWrapper>
          <Label htmlFor='2'>
            <Input
            id='2'
            name='description'
            as='textarea'currentCategory
            value={values.description}
            onChange={handleChange}
            />

            <Label.Text>
              Descrição:   
            </Label.Text>
          </Label>
        </FormFieldWrapper>
        
        <FormFieldWrapper>
          <Label htmlFor='3'>
            <Input
            id='3'
            name='color'
            type='color'
            value={values.color}
            onChange={handleChange}
            />
            <Label.Text>
              Cor: 
            </Label.Text>
          </Label>
        </FormFieldWrapper>
        
        <ButtonLink onClick={handleSubmit}>
          Cadastrar
        </ButtonLink>
      </form>

      <ul>
        { 
          categories.map( (category, index) =>{
          return <li key={`${category}${index}`}>{category.titulo}</li>
          })
        }
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
};
export default CadastroCategoria;