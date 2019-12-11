import { combineReducers } from 'redux';
import { cities } from '@/pages/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export default (history:any) =>
  combineReducers({
    router: connectRouter(history),
    ...cities,
  });
