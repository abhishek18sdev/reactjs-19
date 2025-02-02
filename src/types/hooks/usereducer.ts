export interface Action {
    type: ActionTypes,
    payload : number
};

// actionTypes.ts
export enum ActionTypes {
    INCREMENT_COUNTER = "increment",
    DECREMENT_COUNTER = "decrement",
    RESET_COUNTER= "reset"
  }
  