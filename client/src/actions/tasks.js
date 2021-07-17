import getAuthToken from "../helpers/getAuthToken";
import api from "../helpers/api";
import { logout } from "./user";
import { TASKS } from "./types";

export const getAll = () => async (dispatch) => {
  let token;
  try {
    token = getAuthToken();
  } catch (error) {
    dispatch(logout());
  }
  const {
    data: { tasks },
  } = await api.get("/tasks", { headers: { "x-access-token": token } });
  dispatch({
    type: TASKS.GET_ALL,
    payload: tasks,
  });
};

export const create = (task) => async (dispatch) => {
  let token;
  try {
    token = getAuthToken();
  } catch (error) {
    dispatch(logout());
  }
  try {
    const {
      data: { task: createdTask },
    } = await api.post(
      "/tasks",
      { ...task },
      { headers: { "x-access-token": token } }
    );
    dispatch({
      type: TASKS.CREATE,
      payload: createdTask,
    });
  } catch (error) {
    // dispatch alert
  }
};

export const remove = (taskId) => async (dispatch) => {
  let token;
  try {
    token = getAuthToken();
  } catch (error) {
    dispatch(logout());
  }
  try {
    await api.delete(`/tasks/${taskId}`, {
      headers: { "x-access-token": token },
    });
    dispatch({
      type: TASKS.REMOVE,
      payload: taskId,
    });
  } catch (error) {}
};

export const update = (task) => async (dispatch) => {
  let token;
  try {
    token = getAuthToken();
  } catch (error) {
    dispatch(logout());
  }
  try {
    const {
      data: { task: updatedTask },
    } = await api.put(
      `/tasks/${task._id}`,
      { ...task },
      { headers: { "x-access-token": token } }
    );
    dispatch({
      type: TASKS.UPDATE,
      payload: updatedTask,
    });
  } catch (error) {}
};
