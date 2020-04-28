import React from "react";
import styled, { keyframes } from "styled-components";

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

const Name = styled.div`
  font-size: 30px;
  animation: ${fadeIn} 1s;
  animation-fill-mode: forwards;
  background-color: #282c34;
  padding-bottom: 10px;
`;

const UnderLine = styled.div`
  background-color: #282c34;
  height: 0;
  width: 99%;
  text-align: center;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  animation: ${expand} .7s;
  animation-fill-mode: forwards;
  //animation-delay: .3s;
  opacity: 0;
`;

const StyledDiv = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  background-color: #282c34;
  text-align: center;
`;

const PopUpHeader = (props) => {
  return (
    <StyledDiv>
      <Name>{props.children}</Name>
      <UnderLine/>
    </StyledDiv>
  )
};

export default PopUpHeader