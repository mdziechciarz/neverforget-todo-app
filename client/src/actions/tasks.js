import getAuthToken from '../helpers/getAuthToken';
import api from '../helpers/api';
import { logout } from "./user";
import { TASKS } from './types';

export const getAll = () => async (dispatch) => {
  // get tasks from api
  let token;
  try {
    token = getAuthToken()
  } catch (error) {
    dispatch(logout());
  }
  const { data: { tasks } } = await api.get('/tasks', { headers: { 'x-access-token': token } })
  console.log(tasks);

  dispatch({
    type: TASKS.GET_ALL,
    payload: tasks
  })
}

export const create = () => (dispatch) => {

}

export const remove = () => (dispatch) => {

}

export const update = () => (dispatch) => {

}