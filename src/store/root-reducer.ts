import { combineReducers } from 'redux';
import { cities } from '@/pages/reducer';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { search } from '@/components/app-header/reducer';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    ...cities,
    ...search,
  });

export default createRootReducer;
