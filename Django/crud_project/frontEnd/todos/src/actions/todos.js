import {
  CREATE_TODO,
  GET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "./types";

import TodoService from "../services/TodoService";

export const createTodo = (title, description) => async (dispatch) => {
  try {
    const res = await TodoService.createTodo({ title, description });
    dispatch({
      type: CREATE_TODO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await TodoService.getAllTodos();
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = (todoID, todo) => async (dispatch) => {
  try {
    const res = await TodoService.updateTodo(todoID, todo);
    dispatch({
      type: UPDATE_TODO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTodo = (todoID) => async (dispatch) => {
  try {
    await TodoService.removeTodo(todoID);
    dispatch({
      type: DELETE_TODO,
      payload: { todoID },
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteAllTodos = () => async (dispatch) => {
  try {
    const res = await TodoService.removeAllTodos();
    dispatch({
      type: DELETE_ALL_TODOS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTodoByName = (todoName) => async (dispatch) => {
  try {
    const res = await TodoService.findTodoByName(todoName);
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
