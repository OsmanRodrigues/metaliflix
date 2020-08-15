import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import { FormFieldWrapper, Label, Input } from '../Categoria/styles';
import { useForm, useCategoriesList } from '../../../hooks/hooks';
import { ButtonLink } from '../../../components/Menu/styles';
import { api } from '../../../services/api';

const CadastroVideo = () =>{
  const history = useHistory()
  const initialValues = {
    title:'',
    url:'',
    category:'',
    categoryId: 1
  }
  const {values, handleChange, clearForm} = useForm(initialValues)
  const {categoriesList} = useCategoriesList()
  
  const registerVideo = async (videoInfos) =>{ 
    const body = JSON.stringify(videoInfos)

    api.post('/videos', body, {
      headers:{
        'Content-type':'application/json'
    }})
    .then(response=>{
      if(response.data){
        window.alert('Vídeo cadastrado com sucesso!')
        history.push('/')
      }
      throw new Error('Não foi possível cadastrar o vídeo.')
    })
  }
  
  const handleSubmit = async (event) =>{
    event.preventDefault()

    const videoInfos = {
      titulo: values.title,
      url: values.url,
      categoriaId: values.categoryId
    }
    await registerVideo(videoInfos)

    clearForm()
  } 

  //TODO: validar forms, tratar erros
  //TODO: ajustar responsividade do botão de cadastrar
  //TODO: ajustar para que o vídeo seja cadastrado na categoria selecionada
  return(
    <PageDefault>
      
      <h1>Cadastro de Vídeo</h1>

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
            autoComplete={categoriesList ? 'off':'on'}
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
            {! categoriesList ?
             <option>Carregando Lista de Categorias...</option>
             :
             categoriesList.map(category=>{
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
        Cadastro de Categoria
      </Link>

      <br/>

      <Link to="/">
        Voltar
      </Link>
    </PageDefault>
  )
};
export default CadastroVideo;