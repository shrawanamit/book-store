import { DISPLAY_SNACKBAR} from '../Action/actionType';

const initialState={
    snackbarOpen:'',
}
const snackbarReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case DISPLAY_SNACKBAR:
            console.log("i am in reducer SNACKBAR ",action);
            return {
                ...state, 
                snackbarOpen:action.snackbarData
            }
            default: return state
        }
}
    
export default snackbarReducer;