import "./App.css";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  console.log(
    "%c 🍑 visibilityFilter: ",
    "font-size:20px;background-color: #93C0A4;color:#fff;",
    visibilityFilter
  );
  console.log(
    "%c 🥒 todos: ",
    "font-size:20px;background-color: #42b983;color:#fff;",
    todos
  );
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
