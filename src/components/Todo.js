import React from "react";
import { toggleTodo } from "../redux/actions";
function Todo(props) {
  const { dispatch, todos, visibleTodos } = props;
  console.log("%c Line:5 🍺 visibleTodos", "color:#f5ce50", visibleTodos);

  return (
    <div>
      {visibleTodos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => {
            dispatch(toggleTodo(todo.id));
          }}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
}

export default Todo;
