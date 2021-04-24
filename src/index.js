import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootreducers from "./redux/rootreducers";
import { loadStorage, saveStorage } from "./services/localStorage";
const persistedStorage = loadStorage();
const store = createStore(rootreducers, persistedStorage);

function throttle(func, delay) {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, arguments);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}
store.subscribe(() => {
  throttle(() => {
    saveStorage(store.getState());
  }, 2000)();
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
