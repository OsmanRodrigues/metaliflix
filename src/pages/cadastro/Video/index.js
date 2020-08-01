import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import { FormFieldWrapper, Label, Input } from '../Categoria/styles';
import { useForm } from '../../../hooks/hooks';
import { ButtonLink } from '../../../components/Menu/styles';

const CadastroVideo = () =>{
  const history = useHistory()
  const initialValues = {
    title:'',
    url:'',
    category:'',
    categoryId: 1
  }
  const {values, handleChange, clearForm} = useForm(initialValues)
  const [categories, setCategories] = useState(null)

  const registerVideo = async (videoInfos) =>{
    //TODO: organizar com instancia custom do axios
    const DB_URL = 'http://localhost:8080/videos' 
    fetch(DB_URL, {
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(videoInfos)
    }).then(async(r)=>{
      if(r.ok){
        const response = await r.json();
        history.push('/')
        console.log(response)
        return response
      }
      throw new Error('Não foi possível cadastrar o vídeo.')
    })
  }
  
  const handleSubmit = async (event) =>{
    event.preventDefault()
    await registerVideo({
      titulo: values.title,
      url: values.url,
      categoriaId: values.categoryId
    })
    clearForm()
  } 

  useEffect(()=>{
    const DB_URL = 'http://localhost:8080/categorias' 
    fetch(DB_URL).then(async(r)=>{
      const response = await r.json();
      setCategories(response)
    })
  }, [])
  //TODO: validar forms, tratar erros
  //TODO: ajustar responsividade do botão de cadastrar
  return(
    <PageDefault>
      
      <h1>Cadastro do vídeo</h1>
      <form>
        <FormFieldWrapper>
          <Label htmlFor='1'>
            <Input
            id='1'
            name='title'
            type='text'
            value={values.title}
            onChange={handleChange}
            />
            <Label.Text>
            Título:
            </Label.Text> 
          </Label>
        </FormFieldWrapper>

        <FormFieldWrapper>
          <Label htmlFor='2'>
            <Input
            id='2'
            name='url'
            type='url'
            value={values.url}
            onChange={handleChange}
            />
            <Label.Text>
            URL:
            </Label.Text> 
          </Label>
        </FormFieldWrapper>

        <FormFieldWrapper>
          <Label htmlFor='3'>
            <Input
            autoComplete={categories ? 'off':'on'}
            id='3'
            name='category'
            type='text'
            value={values.category}
            onChange={handleChange}
            list={'suggestionFor_3'}
            />
            <Label.Text>
            Categoria:
            </Label.Text>
          </Label>
          <datalist id={'suggestionFor_3'}>
            {categories && categories.map(category=>{
              return <option value={category.titulo}>
                {category.titulo}
              </option>
            })}
          </datalist>
        </FormFieldWrapper>

        <ButtonLink onClick={handleSubmit}>
          Cadastrar
        </ButtonLink>
      </form>
      <br/>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
      <br/>
      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  )
};
export default CadastroVideo;