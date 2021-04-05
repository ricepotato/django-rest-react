import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import logger from "redux-logger";

const middelwares = [thunk, logger];

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middelwares)
  );
  return store;
}
