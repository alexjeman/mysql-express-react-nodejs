import React, { Fragment, useContext } from "react";
import ProjectItemEdit from "../admin/ProjectItemEdit";
import ProjectContext from "../../context/project/projectContext";

const ProjectsEdit = () => {
  const projectContext = useContext(ProjectContext);

  const { projects, filtered } = projectContext;

  if (projects.length === 0) {
    return <h4>No projects</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(project => (
            <ProjectItemEdit key={project.id} project={project} />
          ))
        : projects.map(project => (
            <ProjectItemEdit key={project.id} project={project} />
          ))}
    </Fragment>
  );
};

export default ProjectsEdit;
