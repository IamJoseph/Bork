import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import MenuReducer from './MenuReducer';
import MarkerReducer from './MarkerReducer';

export default combineReducers({
  //must have at least one default reducer
  auth: AuthReducer,
  menu: MenuReducer,
  marker: MarkerReducer,
});
