import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './root-reducer';
import { routerMiddleware } from 'connected-react-router';
import { getHistory } from '@/utils/history/history';

const history = getHistory();
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

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
};
