import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

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

  return(
    <PageDefault>
      
    <h1>Cadastro da categoria: {inputValues.currentCategory} </h1>
      
      <form onSubmit={handleSubmit}>
        <>
          <label>
            Nome da categoria:
            <input
            name='currentCategory'
            type='text'
            value={inputValues.currentCategory}
            onChange={handleInputChange}
            />
          </label>
        </>
        <br/>
        <>
          <label>
            Descrição:
            <textarea
            name='description'
            type='textarea'
            value={inputValues.description}
            onChange={handleInputChange}
            />
          </label>
        </>
        <br/>
        <>
          <label>
            Cor da categoria:
            <input
            name='color'
            type='color'
            value={inputValues.color}
            onChange={handleInputChange}
            />
          </label>
        </>
        <br/>
        <button>
          Cadastrar
        </button>
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