import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import { Reducers } from "./reducers";
const middleWare = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducers,
  composeEnhancer(applyMiddleware(...middleWare))
);

export default store;
