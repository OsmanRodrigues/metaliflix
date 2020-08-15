import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import {
  FormFieldWrapper, Label, Input, FormButton
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

      <form id='categoryForm' onSubmit={handleSubmit}>
        <FormFieldWrapper>
          <Label htmlFor='1'>
            <Input
            required
            pattern='[A-Z][A-Za-z]{1,19}'
            title='Apenas letras. No mínimo 4 e a primeira deve ser maiúscula.'
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
            cols='80'
            title='No mínimo 30 e no máximo 120 caracteres'
            id='2'
            name='description'
            as='textarea'
            required
            minLength='30'
            maxLength='120'
            form='categoryForm'
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
            required
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
        
        <FormButton>
          Cadastrar
        </FormButton>
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
    
      <Link to='/cadastro/video'>
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