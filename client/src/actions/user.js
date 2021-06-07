import api from '../helpers/api';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const { data: { user, accessToken } } = await api.post('/auth/login', { email, password });
    localStorage.setItem('user', accessToken);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const register = ({ username, email, password }) => async (dispatch) => {

}