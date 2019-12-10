import React from "react";

const ProjectItem = ({ project }) => {
  const {
    project_name,
    project_description,
    project_sample,
    project_link,
    project_img
  } = project;
  return (
    <div className='project-card'>
      <div className='card'>
        <div className='card-side card-side-front'>
          <h3>{project_name}</h3>
          <img src={project_img} alt='' />
        </div>
        <div className='card-side card-side-back'>
          <p>{project_description}</p>
          <a href={project_sample}>Code</a>
          <a href={project_link}>Live</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
