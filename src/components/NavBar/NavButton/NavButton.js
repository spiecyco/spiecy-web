import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 40px;
  font-size: 20px;
  width: 33.33%;
  background-color: inherit;
  color: inherit;
  text-align: center;
  border: none;
  outline: none;
  transition: .5s;
  display: inline-block;

  &:hover {
    cursor: pointer;
    background-color: #282e39;
  }
  
  @media(min-width: 600px) {
    width: 150px;
    height: 60px;
    font-size: 25px;
  }
`;

const NavButton = (props) => {
  return (
    <StyledButton page={props.page} onClick={props.clicked}>
      {props.children}
    </StyledButton>
  )
};

export default NavButton;