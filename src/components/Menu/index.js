import React from 'react';
import logo from '../../assets/logo.png';

import {
  MenuWrapper, Logo, ButtonLink
}from './styles';

import { Link } from 'react-router-dom';

const Menu =(showButtonLink)=>{
  return(
    <MenuWrapper>
      <Link to='/'>
       <Logo src={logo} alt='logo'/>
      </Link>

      <ButtonLink
        showButtonLink={showButtonLink.children}
        as={Link} 
        to='/cadastro/video'
      >
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  )
};
export default Menu;