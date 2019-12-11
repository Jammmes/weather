import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './root-reducer';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';

const history: any = createBrowserHistory();
const middlewares: Middleware[] = [];
const isDev = process.env.NODE_ENV !== 'production';

middlewares.push(routerMiddleware(history));
middlewares.push(thunk);

const logger = createLogger({
  collapsed: true,
  diff: true,
});

if (isDev) {
  middlewares.push(logger);
}

export const configureStore = (initialState?: any) => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(...middlewares),
  );
  return store;
};
