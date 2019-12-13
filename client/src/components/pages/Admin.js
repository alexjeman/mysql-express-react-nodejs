import React, { useContext, useEffect } from "react";
import ProjectsEdit from "../admin/ProjectsEdit";
import ProjectForm from "../admin/ProjectForm";
import ProjectFilter from "../admin/ProjectFilter";
import AuthContext from "../../context/auth/authContext";

const Admin = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    // eslint-disable-next-line
  }, [])

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
