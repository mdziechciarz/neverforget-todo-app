import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
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
      }
    default:
      return state;
  }
}

export default userReducer;