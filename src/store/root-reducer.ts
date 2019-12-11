import { combineReducers } from 'redux';
import { cities } from '@/pages/reducer';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    // ...cities,
  });

export default createRootReducer;
