import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import { FormFieldWrapper, Label, Input, FormButton } from '../Categoria/styles';
import { useForm, useCategoriesList } from '../../../hooks/hooks';
import { inputPatterns, inputTitles } from '../../../utils/utils';
import { api } from '../../../services/api';

const CadastroVideo = () =>{
  const history = useHistory()
  const initialValues = {
    title:'',
    url:'',
    category:'',
    categoryId: 1
  }
  const {values, handleChange, clearForm, setValues} = useForm(initialValues)
  const {categoriesList} = useCategoriesList()
  
  const registerVideo = async (videoInfos) =>{ 
    const body = JSON.stringify(videoInfos)

    api.post('/videos', body, {
      headers:{
        'Content-type':'application/json'
    }})
    .then(response=>{
      if(response.data){
        window.alert('*Isto é uma simulação* \n Vídeo cadastrado com sucesso!')
        history.push('/')
      }else{
        window.alert('Não foi possível cadastrar o vídeo.')
      }
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

  const handleChoseCategory =(event)=>{
    const {currentTarget, target} = event
    const selectedCategoryName = target.value
    const options = [...currentTarget.children]
    
    const selectedOptionAttributes = options.find(option=>{
      return option.attributes.value && 
      option.attributes.value.value === selectedCategoryName
    })
 
    setValues({...values, 
      categoryId: selectedOptionAttributes ? Number(selectedOptionAttributes.id) : 1
    })
  }

  return(
    <PageDefault showbuttonlink={false}> 
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormFieldWrapper>
          <Label htmlFor='videoFormInput1'>
            <Input
            required
            pattern={inputPatterns.videoTitle}
            title={inputTitles.videoTitle}
            maxLength='60'
            id='videoFormInput1'
            autoComplete='off'
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
          <Label htmlFor='videoFormInput2'>
            <Input
            required
            pattern={inputPatterns.videoUrl}
            title={inputTitles.videoUrl}
            id='videoFormInput2'
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
          <Label htmlFor='videoFormInput3'>
            <Input
            required
            title={inputTitles.videoCategory}
            id='videoFormInput3'
            name='category'
            type='text'
            value={values.category}
            onChange={handleChange}
            as='select'
            onClick={handleChoseCategory}
            >
            <option>{''}</option>
            {!categoriesList ?
              <option>Buscando categorias disponíveis...</option>
              :
              categoriesList.map(category=>{
              return (
                <option
                key={category.id} 
                id={category.id} 
                value={category.titulo}
                >
                  {category.titulo}
                </option>
              )})
            }
            </Input>
            <Label.Text>
            Categoria:
            </Label.Text>
          </Label>
        </FormFieldWrapper>

        <FormButton>
          Cadastrar Vídeo
        </FormButton>
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