import { DISPLAY_IMAGE, DISPLAY_SNACKBAR, DISPLAY_ALLBOOKS} from '../Action/actionType';

const initialState = {
    imageURL: '',
    open: false,
    snackBarMeessage: '',
    allBooks: [],
}


const bookReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case DISPLAY_IMAGE:
            return {
                ...state,
                imageURL: action.payload,
            }
        case DISPLAY_ALLBOOKS:
            console.log("i am in reducer alll");
            return {
                ...state, 
                allBooks:[...action.allBooks]
            }

        default: return state
    }
}

export default bookReducer;