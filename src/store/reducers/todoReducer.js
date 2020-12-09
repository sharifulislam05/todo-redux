import {
  ADD_TO_DO,
  COMPLETE_TO_DO,
  REMOVE_TO_DO,
  UPDATE_TO_DO,
} from "../actions/actionTypes";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_DO:
      let random = Math.round(1000 + Math.random() * 9000);
      return [
        ...state,
        {
          content: action.payload,
          isComplete: false,
          todoId: random,
        },
      ];
    case REMOVE_TO_DO:
      const remainingToDo = state.filter((td) => td.todoId !== action.payload);
      return remainingToDo;

    case COMPLETE_TO_DO:
      const completeToDo = state.map((td) =>
        td.todoId === action.payload
          ? { ...td, isComplete: !td.isComplete }
          : td
      );
      return completeToDo;
      
    case UPDATE_TO_DO:
      const updateToDo = state.map((td) =>
        td.todoId === action.payload.todoId
          ? { ...td, content: action.payload.text }
          : td
      );
      return updateToDo;
    default:
      return state;
  }
};
export default todoReducer;
