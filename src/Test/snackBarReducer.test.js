import * as types from '../redux/Action/actionType';
import snackBarReducer from '../redux/Reducer/snackbarReducer'

describe('snack Bar Reducer', () => {
    it('should return the initial state', () => {
        expect(snackBarReducer(undefined, {})).toEqual(
            {
                snackbarOpen:'',
            }
        )
    })
})