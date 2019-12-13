import React, { useReducer } from "react";
import axios from "axios";
import ProjectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_PROJECTS,
  UPDATE_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER
} from "../types";

const ProjectState = props => {
  const initialState = {
    projects: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Get projects
  const getProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      dispatch({ type: GET_PROJECTS, payload: res.data });
    } catch (error) {
      dispatch({ type: PROJECT_ERROR, payload: error.response.msg });
    }
  };

  // Add project
  const addProject = async project => {
    const config = {
      headers: {
        "Contents-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/projects", project, config);
      dispatch({ type: ADD_PROJECT, payload: res.data });
    } catch (error) {
      dispatch({ type: PROJECT_ERROR, payload: error.response.msg });
    }
  };

  // Delete project
  const deleteProject = id => {
    dispatch({ type: DELETE_PROJECT, payload: id });
  };

  // Clear projects
  const clearProjects = () => {
    dispatch({ type: CLEAR_PROJECTS });
  };

  // Set current project
  const setCurrent = project => {
    dispatch({ type: SET_CURRENT, payload: project });
  };

  // Clear current project
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update project
  const updateProject = project => {
    dispatch({ type: UPDATE_PROJECT, payload: project });
  };

  // Filter projects
  const filterProjects = text => {
    dispatch({ type: FILTER_PROJECTS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getProjects,
        addProject,
        updateProject,
        deleteProject,
        setCurrent,
        clearCurrent,
        filterProjects,
        clearFilter,
        clearProjects
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
