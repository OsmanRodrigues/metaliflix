import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () =>{

  return(
    <PageDefault>
      
      <h1>Cadastro da categoria</h1>
      
      

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
};
export default CadastroCategoria;