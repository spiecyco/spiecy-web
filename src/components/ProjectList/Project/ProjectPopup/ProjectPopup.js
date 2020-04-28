import React from 'react';
import styled, { keyframes } from "styled-components";
import PopUpHeader from "./PopUpHeader/PopUpHeader";

const fadeIn = keyframes`
  0% {
  opacity: 0;
  }
  100% {
  opacity: 1;
  }
`;

const StyledDiv = styled.div`
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const ContentContainer = styled.div`
  background-color: #282c34;
  text-align: center;
  width: 90%;
  margin: auto;
  opacity: 0;
  animation: ${fadeIn} 1s;
  animation-delay: .2s;
  animation-fill-mode: forwards;
  padding-bottom: 20px;
`;

const StyledImage = styled.img`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 90%;
  height: auto;
  
  
`;

const Creators = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  @media (max-width: 900px) {
  font-size: 17px;
  } 
`;


const Description = styled.div`
  background-color: #282c34;
  margin-bottom: 10px;
  font-size: 17px;
`;

const StyledLink = styled.a`
  color: white;
`;


const ProjectPopup = (props) => {
  return (
    <StyledDiv>
      <PopUpHeader>{props.name}</PopUpHeader>
      <ContentContainer>
        <Creators>
          By: <strong>{props.creators}</strong>
        </Creators>
        <StyledImage src={props.srcInfo}/>
        <Description>
          <strong>
            {'Link:  '}
            <StyledLink href={props.link} target='_blank'>
              {props.link === '' ? 'Not Available' :  props.name}
            </StyledLink>
          </strong>
        </Description>
        <Description><strong>Description:</strong> {props.description}</Description>
      </ContentContainer>
    </StyledDiv>
  )
};

export default ProjectPopup;