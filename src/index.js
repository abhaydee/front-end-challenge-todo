import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootreducers from "./redux/rootreducers"
const store=createStore(rootreducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

