import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  
  img {
    margin: 16px;
    width: 298px;
    height: 197px;    
    object-fit: cover;
  }
`;

export const SliderItemTitle = styled.mark`
  grid-row: 5 / 5;
  font-size: x-small;
  text-align: left;
  width: auto;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  border-radius:10px;
  color: var(--grayMedium);
  background-color: var(--black);
`;

const Slider = ({ children }) =>{
  return(
    <Container>
      <SlickSlider {...{
        variableWidth: true,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
        speed: 400,
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  ); 
} 
export default Slider; 