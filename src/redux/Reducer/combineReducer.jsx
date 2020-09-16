import { combineReducers } from 'redux';
import bookReducer from './reducer';
import bookInCartReducer  from './cartReducer';

export default combineReducers({
    bookInCartReducer,
    bookReducer,
  
  })
