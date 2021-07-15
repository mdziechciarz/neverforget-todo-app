import getAuthToken from '../helpers/getAuthToken';
import api from '../helpers/api';
import { logout } from "./user";
import { CATEGORIES } from './types';

export const getAll = () => async (dispatch) => {
  // get tasks from api
  let token;
  try {
    token = getAuthToken()
  } catch (error) {
    dispatch(logout());
  }
  const { data: { categories } } = await api.get('/categories', { headers: { 'x-access-token': token } })
  console.log(categories);

  dispatch({
    type: CATEGORIES.GET_ALL,
    payload: categories
  })
}