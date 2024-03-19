import { visibilityFilter } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Filters } from "../constants/filters";

const FilterLink = ({ filter }) => {
  const dispatch = useDispatch();
  
  const { all, active, completed } = Filters;
  const handleOnChange = (e) => {
    dispatch(visibilityFilter(e.target.value));
  };

  return (
    <select onChange={handleOnChange}>
      <option value="SHOW_ALL">All</option>
      <option value="SHOW_ACTIVE">Active</option>
      <option value="SHOW_COMPLETED">Completed</option>
    </select>
  );
};

export default FilterLink;
