import { DISPLAY_ALLBOOKS_INCART,USER_DATA } from '../Action/actionType';

const cartInitialState={
    allBooksInCart: [],
    userData:''
}
const bookInCartReducer = (state = cartInitialState, action) => {
    
    switch (action.type) {
        case DISPLAY_ALLBOOKS_INCART:
            console.log("i am in reducer cart",action.cartAllBooks);
            return {
                ...state, 
                allBooksInCart:[...action.cartAllBooks] ,
            }
            case USER_DATA:
            console.log("i am in reducer user",action.userData);
            return {
                ...state, 
                userData:action.userData ,
            }

        default: return state
    }
}
export default bookInCartReducer 