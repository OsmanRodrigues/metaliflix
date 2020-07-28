import React from 'react';
import logo from '../../assets/logo.png';

import {
  MenuWrapper, Logo, ButtonLink
}from './styles';

const Menu =()=>{

  return(
    <MenuWrapper>
      <a href='/'>
       <Logo src={logo} alt='logo'/>
      </a>

      <ButtonLink href='/'>
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  )
};
export default Menu;