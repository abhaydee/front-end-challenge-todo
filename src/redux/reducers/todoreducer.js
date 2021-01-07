import { act } from "react-dom/test-utils";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actiontypes";

export let intialState = {
  todos: [],
};

export const todoreducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      break;
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.splice(action.payload, 1),
      };
    case UPDATE_TASK:
      return {
        ...state,
        todos: state.todos.splice(
          action.payload.index,
          1,
          action.payload.edittask
        ),
      };
    default: {
      return state;
    }
  }
};
