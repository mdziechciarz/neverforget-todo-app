import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from '../actions/types';


const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('accessToken');

const initialState = (user && token) ? {
  isLogged: true,
  user
} : {
  isLogged: false,
  user: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isLogged: true,
        user: action.payload
      };
    case LOGIN_FAIL:
      return {
        isLogged: false,
        user: null
      };
    case REGISTER_SUCCESS:
      return {
        isLogged: true,
        user: action.payload
      }
    case REGISTER_FAIL:
      return {
        isLogged: false,
        user: null
      };
    case LOGOUT:
      return {
        isLogged: false,
        user: null
      };
    default:
      return state;
  }
}

export default userReducer;