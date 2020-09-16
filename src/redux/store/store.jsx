import { createStore} from 'redux';
import combineReducers from '../Reducer/combineReducer';


const  store = createStore(combineReducers)

export default store