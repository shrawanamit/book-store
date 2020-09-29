import { DISPLAY_ALLBOOKS_INCART,USER_DATA ,GET_AllCART_METHOD,ORDER_ID} from '../Action/actionType';

const cartInitialState={
    allBooksInCart: [],
    userData:'',
    methodData:null,
    orderSummery :[]
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
            case ORDER_ID:
            console.log("i am in reducer user");
            return {
                ...state, 
                orderSummery:action.orderId,
            }
        default: return state
    }
}
export default bookInCartReducer 