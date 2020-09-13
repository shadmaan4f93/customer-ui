import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider  store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();