import React from 'react';
import NavButton from "./NavButton/NavButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  text-align: left;
  z-index: 100;
  @media (min-width: 600px) {
  height: 100%;
  }
`;


const StyledName = styled.div`
//position: absolute;
  float: left;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin: auto;
    
  }
`;

const StyledContainer = styled.div`
  background-color: black;
  width: 100%;
  color: white;
  z-index: 100;
  margin-bottom: 30px;
`;

const NavBar = (props) => {
  return (
    <StyledContainer>
      <StyledName>Sπecy</StyledName>
      <StyledDiv>
        <NavButton clicked={props.buttonClicked.home}>Home</NavButton>
        <NavButton clicked={props.buttonClicked.projects}>Projects</NavButton>
        <NavButton clicked={props.buttonClicked.aboutUs}>About us</NavButton>
      </StyledDiv>
    </StyledContainer>


  )
};

export default NavBar;