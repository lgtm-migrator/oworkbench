import { createStore, combineReducers, Store } from "redux";
import JSONModel from "sap/ui/model/json/JSONModel";
import { createConnect } from "../library/reduxConnect";

const overviewReducer = (state = { num: 0 }, action) => {
  switch (action.type) {
  case "INC":
    return { ...state, num: state.num + 1 };
  case "DEC":
    return { ...state, num: state.num - 1 };
  default:
    return state;
  }
};

export const store: Store = createStore(
  combineReducers({ overview: overviewReducer })
);

/**
 * connect
 *
 * @param {stateMapper} mapper
 */
export const connect = createConnect(JSONModel, store);