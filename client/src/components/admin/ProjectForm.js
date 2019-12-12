import React, { useState, useContext } from 'react'
import ProjectContext from '../../context/project/projectContext'

const ProjectForm = () => {
  const projectContext = useContext(ProjectContext);

  const [project, setProject] = useState({
    project_name: '',
    project_description: '',
    project_sample: '',
    project_link: '',
    project_img: ''
  })

  const {
    project_name,
    project_description,
    project_sample,
    project_link,
    project_img } = project

    const onChange = e => setProject({ ...project, [e.target.name]: e.target.value })
    const onSubmit = e => {
      e.preventDefault()
      projectContext.addProject(project);
      setProject({
        project_name: '',
        project_description: '',
        project_sample: '',
        project_link: '',
        project_img: ''
      })
    }

  return (
    <form onSubmit={onSubmit}>
      <h2>Add project</h2>
      <input type="text" placeholder="Project Name" name="project_name" value={project_name} onChange={onChange} />
      <textarea placeholder="Project Description" name="project_description" value={project_description} onChange={onChange} />
      <input type="text" placeholder="Project link to source code" name="project_sample" value={project_sample} onChange={onChange} />
      <input type="text" placeholder="Project URL" name="project_link" value={project_link} onChange={onChange} />
      <input type="text" placeholder="Project Image URL" name="project_img" value={project_img} onChange={onChange} />
      <div>
        <input type="submit" value="Add project" className="btn" />
      </div>
    </form>
  )
}

export default ProjectForm
