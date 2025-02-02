import React, { useState } from "react";
import { Counter, User } from "../types/hooks/usestate";

const UseState = () => {
  // initial state for the component
  const initialState: User = {
    name: "test",
    email: "test",
  };
  // state for managing the usersstate
  const [state, setState] = useState(initialState);
  //   state for managing the counter state
  const [counter, setCounter] = useState<Counter>({
    count: 0,
  });
  //  function for handeling the user state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((pre: User) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  // function for handeling the counter state increment
  const handleIncrementCounter = () => {
    setCounter((pre: Counter) => {
      return {
        ...pre,
        count: pre.count + 1,
      };
    });
  };
  // function for handeling the counter  state  decrement
  const handleDecrementCounter = () => {
    setCounter((pre: Counter) => {
      return {
        ...pre,
        count: pre.count - 1,
      };
    });
  };
  return (
    <div>
      <div className="">UserName :{state.name}</div>
      <div className="">Email : {state.email}</div>
      <div className="">Counter :{counter.count}</div>
      <div className="">
        <input
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={state.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="">
        <button onClick={handleIncrementCounter}>
          increment+
        </button>
        <button onClick={handleDecrementCounter}>decrement-</button>
      </div>
    </div>
  );
};

export default UseState;
