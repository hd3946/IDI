import { createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
//import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";
import thunk from "redux-thunk";
import user from 'redux/modules/user';
//import Reactotron from "ReactotronConfig";
//const history = createHistory();

const env = process.env.NODE_ENV;

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];


if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }  

  const reducer = history =>
  combineReducers({
    user,
    i18nState,
    router: connectRouter(history)
  });

let store;

if (env === "development") {
  store = initialState =>
    createStore(
      reducer(history),
      composeWithDevTools(applyMiddleware(...middlewares))
      );
} else {
  store = initialState => 
    createStore(reducer(history), applyMiddleware(...middlewares));
}

export default store();