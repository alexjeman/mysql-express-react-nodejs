import {
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        )
      };
  }
};
