import React from 'react';
import PageHeader from "../PageHeader/PageHeader";
import ProjectList from "../ProjectList/ProjectList";

const Projects = (props) => {
  return (
    <div>
      <PageHeader>Projects</PageHeader>
      <ProjectList/>
    </div>
  )
};

export default Projects;