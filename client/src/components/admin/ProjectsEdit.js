import React, { Fragment, useContext } from "react";
import ProjectItemEdit from "../admin/ProjectItemEdit";
import ProjectContext from "../../context/project/projectContext";

const ProjectsEdit = () => {
  const projectContext = useContext(ProjectContext);

  const { projects } = projectContext;

  return (
    <Fragment>
      {projects.map(project => (
        <ProjectItemEdit key={project.id} project={project} />
      ))}
    </Fragment>
  );
};

export default ProjectsEdit;
