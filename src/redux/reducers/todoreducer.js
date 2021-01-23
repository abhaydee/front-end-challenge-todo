import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  THEME,
  EDIT__TASK,
  ACTIVE_TASK,
  COMPLETE_TASK,
} from "../actiontypes";

export let initialState = {
  todos: [],
  completedTodo:[],
  filterTodo:[],
  theme: true,
  cachedInput: {},
};

export const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          { completed: action.payload.completed, input: action.payload.input },
        ],
      };
    case DELETE_TASK:
      state.todos.splice(action.payload, 1);
      return {
        ...state,
        todos: [...state.todos],
      };

    case UPDATE_TASK:
      state.todos.splice(action.payload.index, 1, {
        completed: action.payload.completed,
        input: action.payload.updatetask,
      });
      return {
        ...state,
        todos: [...state.todos],
      };
    case EDIT__TASK:
      return {
        ...state,
        cachedInput: {
          index: action.payload.index,
          input: action.payload.input,
        },
      };
    case ACTIVE_TASK:
      return {
        ...state,
        filterTodo: {filter:action.filter,list:action.activeList},
      };
    case COMPLETE_TASK:
      return {
        ...state,
        filterTodo: {filter:action.filter,list:action.completeList},
      };
    case THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default: {
      return state;
    }
  }
};
