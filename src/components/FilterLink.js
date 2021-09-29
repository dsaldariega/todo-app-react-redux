import { visibilityFilter } from "../redux/actions";
import { useDispatch } from "react-redux";

const FilterLink = ({ filter, children }) => {
  const dispatch = useDispatch();
  // const getVisibleTodos = (todos, filter) => {
  //   switch (filter) {
  //     case "SHOW_ALL":
  //       return todos;
  //     case "SHOW_COMPLETED":
  //       return todos.filter((t) => t.completed);
  //     case "SHOW_ACTIVE":
  //       return todos.filter((t) => !t.completed);
  //   }
  // };
  return (
    <a
      href="/#"
      onClick={(e) => {
        e.preventDefault();
        dispatch(visibilityFilter(filter));
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
