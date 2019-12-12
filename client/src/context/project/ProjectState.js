import React, { useReducer } from "react";
import uuid from "uuid";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER
} from '../types'

const ProjectState = props => {
  const initialState = {
    projects: [
      {
        "id": "1",
        "user": "alexandrujeman.ja@gmail.com",
        "project_name": "Appraisal System 1",
        "project_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus vero nisi natus iste quia, ",
        "project_sample": "https://github.com/alexandrujeman/appraisal-system",
        "project_link": "http://alexjeman.com",
        "project_img": "https://github.com/alexandrujeman/free-code-camp-projects/raw/master/FrontEnd/Build-a-Personal-Portfolio-Webpage/img/tribute_gallery.png"
      },
      {
        "id": "2",
        "user": "alexandrujeman.ja@gmail.com",
        "project_name": "Tribute Page 2",
        "project_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus vero nisi natus iste quia",
        "project_sample": "https://github.com/alexandrujeman/appraisal-system",
        "project_link": "http://alexjeman.com",
        "project_img": "https://github.com/alexandrujeman/free-code-camp-projects/raw/master/FrontEnd/Build-a-Personal-Portfolio-Webpage/img/tribute_gallery.png"
      },
      {
        "id": "3",
        "user": "alexandrujeman.ja@gmail.com",
        "project_name": "Tribute Page 3",
        "project_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus vero nisi natus iste quia, consectetur a nostrum. Architecto inventore porro consequatur illum sit ex cumque perspiciatis iste blanditiis quaerat doloremque vero consectetur accusamus sed aperiam, nesciunt delectus magnam ab?",
        "project_sample": "https://github.com/alexandrujeman/appraisal-system",
        "project_link": "http://alexjeman.com",
        "project_img": "https://github.com/alexandrujeman/free-code-camp-projects/raw/master/FrontEnd/Build-a-Personal-Portfolio-Webpage/img/tribute_gallery.png"
      },
      {
        "id": "4",
        "user": "alexandrujeman.ja@gmail.com",
        "project_name": "Tribute Page 4",
        "project_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus vero nisi natus iste quia, consectetur a nostrum. Architecto inventore porro consequatur illum sit ex cumque perspiciatis iste blanditiis quaerat doloremque vero consectetur accusamus sed aperiam, nesciunt delectus magnam ab?",
        "project_sample": "https://github.com/alexandrujeman/appraisal-system",
        "project_link": "http://alexjeman.com",
        "project_img": "https://github.com/alexandrujeman/free-code-camp-projects/raw/master/FrontEnd/Build-a-Personal-Portfolio-Webpage/img/tribute_gallery.png"
      }
    ]
  }

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Add project
  const addProject = project => {
    project.id = uuid.v4();
    dispatch({ type: ADD_PROJECT, payload: project })
  }

  // Delete project

  // Set current project

  // Clear current project

  // Update project

  // Filter project

  // Clear filter
  return (
    <ProjectContext.Provider
    value={{
      projects: state.projects,
      addProject
    }}>
    { props.children }
    </ProjectContext.Provider>
    )
}

export default ProjectState;
