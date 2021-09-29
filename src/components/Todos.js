import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { getVisibleTodos } from "../util/visibleTodos";
import FilterLink from "./FilterLink";
import Todo from "./Todo";

function Todos(props) {
  const { dispatch, todos, visibilityFilter } = props;
  const [todo, setTodo] = useState("");

  const handleTodoInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  const visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (
    <div>
      <Todo todos={todos} dispatch={dispatch} visibleTodos={visibleTodos} />
      <input type="text" value={todo} onChange={handleTodoInput} />
      <button onClick={handleAddTodo}>Add todo</button>
      <p>
        Show: {""}
        <FilterLink dispatch={dispatch} filter="SHOW_ALL">
          All
        </FilterLink>{" "}
        <FilterLink dispatch={dispatch} filter="SHOW_ACTIVE">
          Active
        </FilterLink>{" "}
        <FilterLink dispatch={dispatch} filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    </div>
  );
}

export default Todos;
