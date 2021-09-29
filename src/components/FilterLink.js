import { visibilityFilter } from "../redux/actions";
import { useDispatch } from "react-redux";

const FilterLink = ({ filter, children }) => {
  const dispatch = useDispatch();

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
