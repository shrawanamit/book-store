import { createStore} from 'redux';
import combineReducers from '../Reducer/combineReducer';



function saveToLocalStorage(combineReducers ) {
    try {
        const serializedState = JSON.stringify(combineReducers );
        localStorage.setItem('currentState', serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        JSON.stringify(combineReducers );
        const serializedState = localStorage.getItem('currentState');
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } 
    catch (e) {}}
const  persistentState=loadFromLocalStorage()
const  store = createStore(combineReducers,persistentState)

export default store