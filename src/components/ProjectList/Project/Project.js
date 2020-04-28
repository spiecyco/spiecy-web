import React from 'react';
import styled, { keyframes } from 'styled-components';
import Popup from "reactjs-popup";
import ProjectPopup from "./ProjectPopup/ProjectPopup";

const fadeIn = keyframes`
  0% {
  opacity: 0;
  }
  100% {
  opacity: 1;
  }
`;

const StyledImage = styled.img`
  margin-top: 10%;
  max-width: 50%;
  max-height: 10%;
  text-align: center;
`;


const StyledContainer = styled.div`
  text-align: center;
  display: inline-block;
  width: 25%;
  transition: .5s;
  opacity: 0;
  animation: ${fadeIn} 1s;
  animation-delay: ${props=>props.index * 0.1 }s;
  animation-fill-mode: forwards;
  
  @media (max-width: 1150px) {
    width: ${100/3}%;
  }
  
  @media (max-width: 900px) {
    width: 50%;
  }
  
  @media (max-width: 700px) {
    width: 100%
  }


  &:hover {
    cursor: pointer;
    background-color: rgba(64,71,84,0.82);
    opacity: .2;
  }
`;

const StyledName = styled.p`
  color: white;
  font-size: 20px;
`;

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
   
  }
  // use your custom style for ".popup-content"
  &-content {
   background-color: #282c34 !important;
   border: none !important;
   padding: 0 !important;
   text-align: center;
   @media (max-width: 900px) {
   width: 60% !important;
   }
   @media (max-width: 650px) {
   width: 80% !important;
   }
  }
`;

const Project = (props) => {

  return (

    <StyledPopup
      trigger={
        <StyledContainer index={props.ind}>
          <StyledImage src={props.srcIcon} alt='Dumb'/>
          <StyledName>{props.children}</StyledName>
        </StyledContainer>
      }
      modal
      closeOnDocumentClick
    >
      <ProjectPopup
        name={props.children}
        creators={props.creators}
        description={props.description}
        srcInfo={props.srcInfo}
        link={props.link}
      >
      </ProjectPopup>
    </StyledPopup>

  )
};

export default Project;