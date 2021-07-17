import { TASKS, LOGOUT } from "../actions/types"

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case TASKS.GET_ALL:
      return action.payload;
    case TASKS.CREATE:
      return [...state, action.payload];
    case TASKS.UPDATE:
      return state.map(task => task._id === action.payload._id ? action.payload : task);
    case TASKS.REMOVE:
      return state.filter(task => task._id !== action.payload)
    case LOGOUT:
      return [];
    default:
      return state;
  }
}

export default tasksReducer;