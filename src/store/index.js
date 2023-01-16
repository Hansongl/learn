import { createStore } from "redux";
import reducers from "./reducer";

const store = createStore(
  reducers,
  //使redux数据显示在插件redux中
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
