import React from 'react';
import styled, {keyframes} from "styled-components";
import PageHeader from "../PageHeader/PageHeader";
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Email } from '../../assets/email.svg';
import NavBar from "../NavBar/NavBar";


const Zoom = keyframes`
100% {
transform: scale(1.1);
}
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Welcome = styled.div`
  text-align: center;
  width: 60%;
  margin: 10px auto 30px auto;
  font-size: 23px;
  color: white;
`;

const LogoWrapper = styled.div`
  margin: auto 10px auto 10px;
  width: 50px;
  transition: transform .2s;
  &:hover {
  transform: scale(1.2);
  }
  display: inline-block;
  
`;




const Home = (props) => {

  return (
    <StyledDiv>
      <NavBar buttonClicked={props.clicked}/>
      <PageHeader>Welcome to Sπecy!</PageHeader>
      <Welcome>
        Portfolio website for our projects and a place for business inquiries. If you would like to have a website
        for personal or other purposes made, be sure to contact us and check us out on GitHub!
      </Welcome>
      <LogoWrapper>
        <a href="http://www.github.com/spiecyco" target="_blank">
          <GitHub fill="#FFF" width="50px" height="50px"/>
        </a>
      </LogoWrapper>
      <LogoWrapper>
        <a href="mailto:spiecy.devs@gmail.com" >
          <Email fill="#FFF" width="50px" height="50px"/>
        </a>
      </LogoWrapper>




    </StyledDiv>

  );
};

export default Home;