import { combineReducers } from 'redux';
import tasks from './tasks';
import user from './user';

const reducers = combineReducers({
  tasks,
  user
});

export default reducers;
