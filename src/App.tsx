import React from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { actions } from "./redux/slice/counter";
import Increment from "./components/Increment";

function App() {
  const countState = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>

      <div>Result {countState}</div>
      <div className="increment">
        <Increment />
      </div>
    </div>
  );
}

export default App;
