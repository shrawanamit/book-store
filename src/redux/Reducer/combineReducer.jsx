import { combineReducers } from 'redux';
import bookReducer from './reducer';
import bookInCartReducer  from './cartReducer';
import snackbarReducer   from './snackbarReducer';

export default combineReducers({
    bookInCartReducer,
    bookReducer,
    snackbarReducer 
  
  })
