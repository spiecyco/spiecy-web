import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
  opacity: 0;
  }
  100% {
  opacity: 1;
  }
`;

const Container = styled.div`

  width: 75%;
  height: 250px;
  background-color: rgba(59,63,71,0.82);
  display: inline-block;
  margin-bottom: 40px;
  @media (max-width: 1100px) {
    height: auto;
    width: 60%;
  }
  opacity: 0;
  animation: ${fadeIn} 1s;
  animation-delay: ${props=>props.index * 0.1 }s;
  animation-fill-mode: forwards;
  
  }
`;

const PicContainer = styled.div`
  
  display: inline-block;
  margin-top: ${.125*250}px;
  height: 75%;
  margin-left: 0px;
  @media (max-width: 1100px) {
    height: 200px;
    float: left;
    margin-left: 10%;
  }
`;

const Pic = styled.img`
  height: 100%;
`;

const BioContainer = styled.div`
  text-align: left;
  margin-top: ${.125*250}px;
  display: inline-block;
  color: white;
  width: 65%;
  height: auto;
  float: right;
  margin-left: 0px;
  margin-right: 10%;
  margin-bottom: 10%;
  @media (max-width: 1100px) {
    float: left;
    margin-left: 10%;
  }
`;

const Bio = styled.div`
  color: white;
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 35px;
`;


const Profile = (props) => {
  return (
    <Container index={props.index}>
      <PicContainer>
        <Pic src={props.src}/>
      </PicContainer>
      <BioContainer>
        <Name>{props.name}</Name>
        <br/>
        <Bio>{props.bio}</Bio>
      </BioContainer>
    </Container>
  );
}

export default Profile;