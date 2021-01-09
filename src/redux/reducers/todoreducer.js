import { ADD_TASK, DELETE_TASK, UPDATE_TASK,THEME,EDIT__TASK } from "../actiontypes";

export let initialState = {
  todos: [],
  theme:true,
  cachedInput:{
  }
};

export const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TASK:
      state.todos.splice(action.payload, 1)
      return {
        ...state,
        todos: [...state.todos]
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
    case EDIT__TASK:
      return {
        ...state,
        cachedInput:{"index":action.payload.index,"input":action.payload.input}
      }
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
