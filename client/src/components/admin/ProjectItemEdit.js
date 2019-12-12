import React, { useContext } from "react";
import PropTypes from 'prop-types'
import ProjectContext from '../../context/project/projectContext'

const ProjectItemEdit = ({ project }) => {
  const projectContext = useContext(ProjectContext)
  const { deleteProject } = projectContext;

  const {
    id,
    project_name,
    project_sample,
    project_link,
  } = project;

  const onDelete = () => {
    deleteProject(id)
  }

  return (
    <div className='card-preview'>
      <h3>{project_name}</h3>
      <ul className='list'>
        <li>{project_link}</li>
        <li>{project_sample}</li>
      </ul>
      <p>
        <button className='btn'>Edit</button>
        <button className='btn' onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ProjectItemEdit.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectItemEdit;
