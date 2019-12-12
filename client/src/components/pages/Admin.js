import React from "react";
import ProjectsEdit from "../admin/ProjectsEdit";
import ProjectForm from "../admin/ProjectForm";
import ProjectFilter from "../admin/ProjectFilter";

const Admin = () => {
  return (
    <div className='admin-page-container'>
      <div className='edit-form'>
        <ProjectForm />
      </div>
      <div className='project-list'>
        <ProjectFilter />
        <ProjectsEdit />
      </div>
    </div>
  );
};

export default Admin;
