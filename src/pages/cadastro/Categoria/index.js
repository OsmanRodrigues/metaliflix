import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import { ButtonLink } from '../../../components/Menu/styles';
import {
  FormFieldWrapper, Label, Input
} from './styles';

import{useForm, useCategoriesList} from '../../../hooks/hooks';

const CadastroCategoria = () =>{
  const history = useHistory()

  const initialValues = {
    currentCategory: '',
    description: '',
    color: '#000'
  }

  const {values, clearForm, handleChange} = useForm(initialValues)
  const {categoriesList} = useCategoriesList()
  
  const handleSubmit = (event)=>{
    console.log('submeteu')
    event.preventDefault()
    clearForm()
    history.push('/')
  }

  return(
    <PageDefault>
      
      <h1>Cadastro de Categoria: {values.currentCategory} </h1>
        {/* 
        TODO: analisar comportamento do onsubmit 
        TODO: ajustar validação do forms
        */}
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
      
      <br/>

      <label htmlFor='categoriesList'>Categorias existentes:</label>
      <ul id='categoriesList'>
        { 
          ! categoriesList ?
          <span>Carregando Lista de Categorias...</span> 
          :
          categoriesList.map( (category, index) =>{
          return <li key={`${category}${index}`}>{category.titulo}</li>
          })
        }
      </ul>
    
      <Link onClick={()=> history.goBack()}>
        Voltar
      </Link>

      <br/>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
};
export default CadastroCategoria;