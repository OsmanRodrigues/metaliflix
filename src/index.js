import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CadastroVideo from './pages/cadastro/Video';
import App from './App';

import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />

      <Route path='/cadastro/video' component={CadastroVideo} exact />
      
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact />

      <Route component={
        ()=> window.location.assign('https://http.cat/404')
      } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
