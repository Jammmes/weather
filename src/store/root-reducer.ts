import { combineReducers } from 'redux';
import { cities } from '@/pages/reducer';

export default combineReducers({
  ...cities,
});
