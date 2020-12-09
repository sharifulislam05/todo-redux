import { SHOW_ALL } from "../actions/actionTypes";
import { VISIBILITY } from "../actions/visibilityActions";

const visibilityReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case VISIBILITY:
      return action.payload;
    default:
      return state;
  }
};
export default visibilityReducer;
