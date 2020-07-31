import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../../../components/Menu/styles';
import {
  FormFieldWrapper, Label, Input
} from './styles';
const CadastroCategoria = () =>{

  const [inputValues, setInputValues] = useState({
    currentCategory: '',
    categories: [],
    description: '',
    color: '#000'
  })

  const handleInputChange = (event) =>{
    const {value, name} = event.target
    setInputValues({...inputValues, [name]: value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    setInputValues({
      ...inputValues,
      currentCategory: '',
      description: '',
      color: '#000',
      categories:[
        ...inputValues.categories, 
        inputValues.currentCategory
      ]
    })
  }

  useEffect(()=>{
    const DB_URL = 'http://localhost:8080/categories' 
    fetch(DB_URL).then(async(r)=>{
      const response = await r.json();
      console.log(response)
    })
  }, [])
  
  return(
    <PageDefault>
      
    <h1>Cadastro da categoria: {inputValues.currentCategory} </h1>
      
      <form onSubmit={handleSubmit}>
        <FormFieldWrapper>
          <Label>
            <Input
            name='currentCategory'
            type='text'
            value={inputValues.currentCategory}
            onChange={handleInputChange}
            />
            <Label.Text>
            Nome da categoria:
            </Label.Text> 
          </Label>
        </FormFieldWrapper>
        
        <FormFieldWrapper>
          <Label>
            <Input
            name='description'
            as='textarea'
            value={inputValues.description}
            onChange={handleInputChange}
            />

            <Label.Text>
              Descrição:   
            </Label.Text>
          </Label>
        </FormFieldWrapper>
        
        <FormFieldWrapper>
          <Label>
            <Input
            name='color'
            type='color'
            value={inputValues.color}
            onChange={handleInputChange}
            />
            <Label.Text>
              Cor: 
            </Label.Text>
          </Label>
        </FormFieldWrapper>
        
        <ButtonLink>
          Cadastrar
        </ButtonLink>
      </form>

      <ul>
        {
          inputValues.categories.map( (category, index) =>
            <li key={`${category}${index}`}>{category}</li>
          )
        }
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
};
export default CadastroCategoria;