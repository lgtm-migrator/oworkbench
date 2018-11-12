import { createStore, combineReducers, Store } from "redux";
import JSONModel from "sap/ui/model/json/JSONModel";

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
export const connect = (mapper: any => any = obj => obj) => {
  var model = new JSONModel(mapper(store.getState()));

  store.subscribe(() => {
    model.setData(mapper(store.getState()), true);
  });

  return model;
};
