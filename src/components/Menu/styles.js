import styled from 'styled-components';

const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  };

  @media (max-width: 800px) {
    
      height: 40px;
      justify-content: center;
    
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  };
`;

const Logo = styled.img`
   max-width: 168px;
   @media (max-width: 800px){
    margin-top:8px;
    max-width: 105px;
  }
`;

const ButtonLink = styled.a`
  color: var(--grayMedium);
  border: 1px solid var(--grayMedium);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: ${({ showbuttonlink })=> showbuttonlink ?'inline-block':'none'};
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
  
  @media (max-width: 800px) {
    
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
    
  }
`;
export {Logo, MenuWrapper, ButtonLink}