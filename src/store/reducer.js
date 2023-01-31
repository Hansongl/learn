import { combineReducers } from "redux";
import { user } from "./userReducer.js";

const reducers = combineReducers({
  //命名空间
  user, //user模块
});

export default reducers;
