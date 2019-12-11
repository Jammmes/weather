import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import  thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';

const history:any = createBrowserHistory();

const logger = createLogger({
  collapsed: true,
  diff:true,
});

const isDev = process.env.NODE_ENV !== 'production';

const middlewares:Middleware[] = [];

middlewares.push(routerMiddleware(history));

middlewares.push(thunk);

if (isDev) {
  middlewares.push(logger);
}

const initState = {};

export const configureStore = (initialState:any = initState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  return store;
};
