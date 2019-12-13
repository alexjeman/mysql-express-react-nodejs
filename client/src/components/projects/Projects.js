import React, { Fragment, useContext, useEffect } from "react";
import Loader from "../layout/Loader";
import ProjectItem from "./ProjectItem";
import ProjectContext from "../../context/project/projectContext";

const Projects = () => {
  const projectContext = useContext(ProjectContext);

  const { projects, getProjects, loading } = projectContext;

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {projects !== null && !loading ? (projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))) : <Loader />}
    </Fragment>
  );
};

export default Projects;
