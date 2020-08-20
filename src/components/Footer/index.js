import React from 'react';
import { FooterBase } from './styles';
import orlogo from '../../assets/or_logo.png';

const Footer =()=> {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/osman-rodrigues/">
        <img
        style={{width:'75px', height:'75px', borderRadius:'8px'}}
          src={orlogo} alt="Logo Osman Rodrigues" 
        />
      </a>
      <br/>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado na
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
