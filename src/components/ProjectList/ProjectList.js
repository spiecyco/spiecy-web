// Returns List of Projects Elements Parsed From the CompletedProjects File

import React from "react";
import styled from "styled-components";
import Project from './Project/Project';
import CompletedProjects from "./CompletedProjects";

const StyledDiv = styled.div`
  display: inline-block;
  margin-top: 30px;
  width: 75%;
  height: 100%;
  text-align: center;
  position: static;
  border: none;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #282c34;
`;

const Projects = CompletedProjects.map((proj, index) =>
  <Project
    srcIcon={proj.srcIcon}
    srcInfo={proj.srcInfo}
    ind={index}
    description={proj.description}
    creators={proj.creators}
    link={proj.link}
  >
    {proj.name}
  </Project>);

const ProjectList = (props) => {
  return (
    <StyledContainer>
      <StyledDiv>
        {Projects}
      </StyledDiv>
    </StyledContainer>
  )
};

export default ProjectList;
