import { combineReducers } from "redux";
import todo from "./todo";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const allReducers = combineReducers({
  todo: todo,
  todos: todos,
  visibilityFilter: visibilityFilter,
});

export default allReducers;
