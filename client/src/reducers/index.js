import { combineReducers } from 'redux';
import user from './user';
import tasks from './tasks';
import categories from './categories';

const reducers = combineReducers({
  user,
  tasks,
  categories
});

export default reducers;
