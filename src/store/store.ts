import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import  thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const logger = createLogger({
  collapsed: true,
  diff:true,
});

const isDev = process.env.NODE_ENV !== 'production';

const middlewares:Middleware[] = [];
middlewares.push(thunk);

if (isDev) {
  middlewares.push(logger);
}

export const configureStore = (initialState:any) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  return store;
};
