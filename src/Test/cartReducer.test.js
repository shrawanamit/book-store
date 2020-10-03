import * as types from '../redux/Action/actionType';
import cartReducer from '../redux/Reducer/cartReducer'

describe('cart reducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(
            {
                allBooksInCart: [],
                userData: '',
                methodData: null,
                orderSummery: []
            }
        )
    })
    it('should handle Display all book in cart', () => {
        expect(
            cartReducer([], {
                type: types.DISPLAY_ALLBOOKS_INCART,
                allBooksInCart: []
            })
        ).toEqual(
            {
                allBooksInCart: []
            }
        )
    })
    it('should handle user data', () => {
        expect(
            cartReducer([], {
                type: types.USER_DATA,
                userData: 'amit'
            })
        ).toEqual(
            {
                userData: 'amit'
            }
        )
    })
    

})