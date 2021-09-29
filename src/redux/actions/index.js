let todoId = 0;
export const addTodo = (text, id) => {
  return {
    type: "ADD_TODO",
    text: text,
    id: todoId++,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id: id,
  };
};

export const visibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};
