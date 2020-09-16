import { DISPLAY_ALLBOOKS_INCART } from '../Action/actionType';

const cartInitialState={
    allBooksInCart: [],
}
const bookInCartReducer = (state = cartInitialState, action) => {
    
    switch (action.type) {
        case DISPLAY_ALLBOOKS_INCART:
            console.log("i am in reducer cart",action.cartAllBooks);
            return {
                ...state, 
                allBooksInCart:[...action.cartAllBooks] ,
            }

        default: return state
    }
}
export default bookInCartReducer 