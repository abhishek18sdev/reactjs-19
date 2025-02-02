import React, { useReducer } from "react";
import { Counter } from "../types/hooks/usestate";
import { Action, ActionTypes } from "../types/hooks/usereducer";

const UseReducer = () => {
  // reducer function that handle the dispatched evernts
  const reducer = (state: Counter, action: Action) => {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + action.payload,
        };
      case "decrement":
        return {
          count: state.count - action.payload,
        };
      case "reset":
        return {
          count: state.count * 0,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      UseReducer
      <div>
        <div className="">{state.count}</div>
        <button
          onClick={() => {
            dispatch({ type: ActionTypes.INCREMENT_COUNTER, payload: 1 });
          }}
        >
          increment+
        </button>
        <button
          onClick={() => {
            dispatch({ type: ActionTypes.DECREMENT_COUNTER, payload: 1 });
          }}
        >
          decrement -
        </button>
        <button
          onClick={() => {
            dispatch({ type: ActionTypes.RESET_COUNTER, payload: 0 });
          }}
        >
          reset 0
        </button>
        <button
          onClick={() => {
            dispatch({ type: ActionTypes.RESET_COUNTER, payload: 0 });
          }}
        >
          reset 0
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
