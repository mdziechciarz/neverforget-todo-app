import api from '../helpers/api';
import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from './types';
import history from '../helpers/history';

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const { data: { user, accessToken } } = await api.post('/auth/login', { email, password });
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
    history.push('/');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
}

export const register = ({ username, email, password }) => async (dispatch) => {
  try {
    const { data: { user, accessToken } } = await api.post('/auth/register', { username, email, password });
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: REGISTER_SUCCESS,
      payload: user
    })
    history.push('/');
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  dispatch({
    type: LOGOUT
  });
  history.push("/")
}