import { DISPLAY_IMAGE } from '../Action/actionType';

const initialState = {
    imageURL: ''
}
const bookReducer = (state = initialState, action) => {
    console.log("i am in reducer");
    switch (action.type) {
        case DISPLAY_IMAGE:
           return { 
               ...state, 
               imageURL:action.payload ,
            }
            
            default:return state
    }
}

export default bookReducer