import React, { useState, useContext, useEffect } from "react";
import ProjectContext from "../../context/project/projectContext";

const ProjectForm = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, updateProject, clearCurrent, current } = projectContext;

  useEffect(() => {
    if (current != null) {
      setProject(current);
    } else {
      setProject({
        project_name: "",
        project_description: "",
        project_sample: "",
        project_link: "",
        project_img: "",
        project_img_pages: ""
      });
    }
  }, [projectContext, current]);

  const [project, setProject] = useState({
    project_name: "",
    project_description: "",
    project_sample: "",
    project_link: "",
    project_img: "",
    project_img_pages: ""
  });

  const {
    project_name,
    project_description,
    project_sample,
    project_link,
    project_img,
    project_img_pages
  } = project;

  const onChange = e =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addProject(project);
    } else {
      updateProject(project);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? "Edit Project" : "Add Project"}</h2>
      <input
        type='text'
        placeholder='Project Name'
        name='project_name'
        value={project_name}
        onChange={onChange}
      />
      <textarea
        placeholder='Project Description'
        name='project_description'
        value={project_description}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project link to source code'
        name='project_sample'
        value={project_sample}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project URL'
        name='project_link'
        value={project_link}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project Image URL'
        name='project_img'
        value={project_img}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Project Image URL secondary'
        name='project_img_pages'
        value={project_img_pages}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? "Save" : "Add Project"}
          className='btn'
        />
      </div>
      {current && (
        <div>
          <button className='btn' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProjectForm;
