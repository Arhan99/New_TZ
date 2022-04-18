import { createStore, combineReducers, applyMiddleware } from "redux";
import { formReducer } from "./reducers/form";
import { colorsReducer } from "./reducers/color";
import thunkMiddleWare from "redux-thunk";

const rootReducer = combineReducers({
  form: formReducer,
  colors: colorsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;
