import { TASKS, LOGOUT } from "../actions/types"

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case TASKS.GET_ALL:
      return action.payload;
    case LOGOUT:
      return [];
    default:
      return state;
  }
}

export default tasksReducer;