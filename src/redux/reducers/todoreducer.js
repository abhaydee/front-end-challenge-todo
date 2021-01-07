import { act } from "react-dom/test-utils";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK,THEME } from "../actiontypes";

export let initialState = {
  todos: [],
  theme:true
};

export const todoreducer = (state = initialState, action) => {
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
    case THEME:
        return{
            ...state,
            theme:action.payload
        }
    default: {
      return state;
    }
  }
};
