import { createStore, combineReducers } from "redux";
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

const store = createStore(combineReducers({ overview: overviewReducer }));

/**
 * connect
 *
 * @param {stateMapper} mapper
 */
const connect = (mapper = obj => obj) => {
  var model = new JSONModel(mapper(store.getState()));

  store.subscribe(() => {
    model.setData(mapper(store.getState()), true);
  });

  return model;
};

export default { connect, store };
