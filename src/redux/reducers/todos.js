import todo from "./todo";
import todo2 from "./todo";
// import todo from

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(null, action)];
    case "TOGGLE_TODO":
      return state.map((todo) => todo2(todo, action));
    default:
      return state;
  }
};

export default todos;
