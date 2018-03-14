import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navReducer from './navReducer';
import loadingReducer from './loadingReducer';
import orgReducer from './orgReducer';


export default combineReducers({
  nav: navReducer,
  form,
  loading: loadingReducer,
  org: orgReducer,
});
