import React, { Fragment, useContext, useEffect } from "react";
import Loader from "../layout/Loader";
import ProjectItemEdit from "../admin/ProjectItemEdit";
import ProjectContext from "../../context/project/projectContext";

const ProjectsEdit = () => {
  const projectContext = useContext(ProjectContext);

  const { projects, filtered, getProjects, loading } = projectContext;

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  if (projects !== null && projects.length === 0 && !loading) {
    return <h4>No projects</h4>;
  }

  return (
    <Fragment>
      {projects !== null && !loading ? (
        filtered !== null ? (
          filtered.map(project => (
            <ProjectItemEdit key={project.id} project={project} />
          ))
        ) : (
          projects.map(project => (
            <ProjectItemEdit key={project.id} project={project} />
          ))
        )
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default ProjectsEdit;
