import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'; 
import CadastroVideo from '../pages/Cadastro/Video';
import CadastroCategoria from '../pages/Cadastro/Categoria';

const Routes =()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />

        <Route path='/cadastro/video' component={CadastroVideo} exact />
        
        <Route path='/cadastro/categoria' component={CadastroCategoria} exact />

        <Route component={
          ()=> window.location.assign('https://http.cat/404')
        } />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes