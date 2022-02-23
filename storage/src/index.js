import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import App from './App';
import Home from "./home"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import allReducers from './reducers';

const store = createStore(allReducers, applyMiddleware(thunk))

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);


