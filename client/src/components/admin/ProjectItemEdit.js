import React from "react";

const ProjectItemEdit = ({ project }) => {
  const {
    id,
    project_name,
    project_sample,
    project_link,
  } = project;
  return (
    <div className='card-preview'>
      <h3>{project_name}</h3>
      <ul className='list'>
        <li>{project_link}</li>
        <li>{project_sample}</li>
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-primary btn-sm'>Delete</button>
      </p>
    </div>
  );
};

export default ProjectItemEdit;
