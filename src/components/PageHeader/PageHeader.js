import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
  opacity: 100%;
  }
`;

const expand = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
  width: 100%;
    transform: scale(.75);
    opacity: 1;
  }
`;

const UnderLine = styled.div`
  background-color: #282c34;
  height: 0;
  width: 99%;
  text-align: center;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  animation: ${expand} 1s;
  animation-fill-mode: forwards;
  //animation-delay: .3s;
  margin-bottom: 40px;
  opacity: 0;
`;

const Header = styled.h1`
  background-color: #282c34;
  color: white;
  opacity: 1;
  animation: ${fadeIn} 1s;
  animation-fill-mode: forwards;
  text-align: center;
  margin-top: 105px;
  position: relative;
  
  @media (max-width: 600px) {
    margin-top: 210px;
  }

`;

const PageHeader = (props) => {
  return (
    <div>
      <Header>{props.children}</Header>
      <UnderLine/>
    </div>

  )
};

export default PageHeader;