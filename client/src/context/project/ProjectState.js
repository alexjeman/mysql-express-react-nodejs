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
        "user": "alexandrujeman.ja@gmail.com",
        "project_name": "Appraisal System",
        "project_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus vero nisi natus iste quia, consectetur a nostrum. Architecto inventore porro consequatur illum sit ex cumque perspiciatis iste blanditiis quaerat doloremque vero consectetur accusamus sed aperiam, nesciunt delectus magnam ab?",
        "project_sample": "https://github.com/alexandrujeman/appraisal-system",
        "project_link": "http://alexjeman.com",
        "project_img": "http://www.cimec.co.za/wp-content/uploads/2018/07/4-Unique-Placeholder-Image-Services-for-Designers.png"
      },
      {
        "user": "alexandrujeman.ja@gmail.com",
        "project_name": "Tribute Page",
        "project_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus vero nisi natus iste quia, consectetur a nostrum. Architecto inventore porro consequatur illum sit ex cumque perspiciatis iste blanditiis quaerat doloremque vero consectetur accusamus sed aperiam, nesciunt delectus magnam ab?",
        "project_sample": "https://github.com/alexandrujeman/appraisal-system",
        "project_link": "http://alexjeman.com",
        "project_img": "http://www.cimec.co.za/wp-content/uploads/2018/07/4-Unique-Placeholder-Image-Services-for-Designers.png"
      }
    ]
  }

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Add project

  // Delete project

  // Set current project

  // Clear current project

  // Update project

  // Filter project

  // Clear filter
  return (
    <ProjectContext.Provider
    value={{
      projects: state.projects
    }}>
    { props.children }
    </ProjectContext.Provider>
    )
}

export default ProjectState;
