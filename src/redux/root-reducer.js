import { combineReducers } from 'redux';

import perfumeReducer from './perfumes/perfume.reducer';

export default combineReducers({
  perfume: perfumeReducer,
});
