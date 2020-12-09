import {
  ADD_TO_DO,
  COMPLETE_TO_DO,
  REMOVE_TO_DO,
  UPDATE_TO_DO,
} from "./actionTypes";

export const addToDo = (text) => {
  return {
    type: ADD_TO_DO,
    payload: text,
  };
};

export const removeToDo = (todoId) => {
  return {
    type: REMOVE_TO_DO,
    payload: todoId,
  };
};
export const updateToDo = (todo) => {
  return {
    type: UPDATE_TO_DO,
    payload: todo,
  };
};
export const completeToDo = (todoId) => {
  return {
    type: COMPLETE_TO_DO,
    payload: todoId,
  };
};
