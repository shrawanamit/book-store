import { DISPLAY_ALLBOOKS_INCART,USER_DATA ,GET_AllCART_METHOD} from '../Action/actionType';

const cartInitialState={
    allBooksInCart: [],
    userData:'',
    methodData:null
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

            case GET_AllCART_METHOD:
            console.log("i am in reducer user",action.methodData);
            return {
                ...state, 
                methodData:action.methodData ,
            }
        default: return state
    }
}
export default bookInCartReducer 