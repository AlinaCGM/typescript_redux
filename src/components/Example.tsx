import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Example() {
  const countState = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      Example
      <div>{countState}</div>
    </div>
  );
}

export default Example;
