import { useState } from "react";
import { visibilityFilter } from "../redux/actions";
import { useDispatch } from "react-redux";

const FilterLink = ({ filter, children }) => {
  console.log("%c Line:6 🌽 children", "color:#ffdd4d", children);
  const [useFilter, setUseFilter] = useState("SHOW_ALL");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("%c Line:13 🍺 e.target.value", "color:#42b983", e);
  }
  // "SHOW_ALL"
  // "SHOW_ACTIVE"
  // "SHOW_COMPLETED"

  return (
    <select
      onClick={
        // () => {
        // setUseFilter(useFilter);
        // dispatch(visibilityFilter(useFilter));
        handleClick
      // }
    }
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
      {useFilter}
    </select>
  );
};

export default FilterLink;
