import React from "react";

const ProjectItem = ({ project }) => {
  const {
    id,
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
          <h3 className='project-name'>{project_name}</h3>
          <img src={project_img} alt='' />
        </div>
        <div className='card-side card-side-back'>
          <p>{project_description}</p>
          <a href={"#popup" + id}>View Description</a>
        </div>
      </div>
      <div className='popup' id={"popup" + id}>
        <a href='#project-page' className='popup-close-main'>{" "}</a>
        <div className='popup-content'>
          <div className='popup-left'>
            <img src={project_img} alt='' className='popup-img' />
            <img src={project_img} alt='' className='popup-img' />
          </div>
          <div className='popup-right'>
            <a href='#project-page' className='popup-close'>
              <span className="iconify" data-icon="ion:close-sharp" data-inline="false"></span>
            </a>
            <h2 className='project-name'>{project_name}</h2>
            <p className='popup-text'>{project_description}</p>
            <a href={project_sample} target="_blank" rel="noopener noreferrer">Code Sample</a>
            <a href={project_link} target="_blank" rel="noopener noreferrer">View Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
