import "./App.css";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  
  return (
    <div>
      <Todos
        todos={todos}
        visibilityFilter={visibilityFilter}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
