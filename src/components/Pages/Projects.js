import React from 'react';
import PageHeader from "../PageHeader/PageHeader";
import ProjectList from "../ProjectList/ProjectList";
import NavBar from "../NavBar/NavBar";

const Projects = (props) => {
  return (
    <div>
      <NavBar buttonClicked={props.clicked}/>
      <PageHeader>Projects</PageHeader>
      <ProjectList/>
    </div>
  )
};

export default Projects;