import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { actions } from "../redux/slice/counter";
import "../App.css";
import { useState } from "react";

function Increment() {
  const countState = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(actions.reset());
  };

  return (
    <div className="App">
      <div className="result"> {countState}</div>
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>

      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
            setIncrementAmount(parseInt(ev.target.value, 10));
          }}
        />
        <div>
          <button onClick={() => dispatch(actions.incrementByAmount(addValue))}>
            Add amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Increment;
