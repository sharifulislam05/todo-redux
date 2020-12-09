import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETE,
} from "../../store/actions/actionTypes";

export const getVisibleToDo = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter((task) => !task.isComplete);
    case SHOW_COMPLETE:
      return todos.filter((task) => task.isComplete);
    default:
      return todos;
  }
};
