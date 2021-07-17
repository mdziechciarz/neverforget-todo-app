import getAuthToken from "../helpers/getAuthToken";
import api from "../helpers/api";
import { logout } from "./user";
import { CATEGORIES } from "./types";

export const getAll = () => async (dispatch) => {
  // get tasks from api
  let token;
  try {
    token = getAuthToken();
  } catch (error) {
    dispatch(logout());
  }
  const {
    data: { categories },
  } = await api.get("/categories", { headers: { "x-access-token": token } });
  dispatch({
    type: CATEGORIES.GET_ALL,
    payload: categories,
  });
};

export const create = (name) => async (dispatch) => {
  let token;
  try {
    token = getAuthToken();
  } catch (error) {
    dispatch(logout());
  }
  try {
    const {
      data: { category },
    } = await api.post(
      "/categories",
      { name },
      { headers: { "x-access-token": token } }
    );
    dispatch({
      type: CATEGORIES.CREATE,
      payload: category,
    });
  } catch (error) {
    // dispatch alert
  }
};
