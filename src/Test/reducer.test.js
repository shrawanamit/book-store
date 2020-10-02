import * as types from '../redux/Action/actionType';
import reducer from '../redux/Reducer/reducer'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                imageURL: '',
                open: false,
                snackBarMeessage: '',
                allBooks: [],
                searchedData: [],
                wishListData: [],
                filteredData: [],
            }
        )
    })
    it('should handle Display all book', () => {
        expect(
            reducer([], {
                type: types.DISPLAY_ALLBOOKS,
                allBooks: []
            })
        ).toEqual(
            {
                allBooks: []
            }
        )
    })
    it('should handle Display image', () => {
        expect(
            reducer([], {
                type: types.DISPLAY_IMAGE,
                imageURL: 'amit.jpg'
            })
        ).toEqual(
            {
                imageURL: 'amit.jpg'
            }
        )
    })
    it('should handle Display all search book', () => {
        expect(
            reducer([], {
                type: types.DISPLAY_ALL_SEARCH_BOOKS,
                searchedData: []
            })
        ).toEqual(
            {
                searchedData: []
            }
        )
    })
    it('should handle Display all wishlist book', () => {
        expect(
            reducer([], {
                type: types.WISHLIST_DATA,
                wishListData: []
            })
        ).toEqual(
            {
                wishListData: []
            }
        )
    })

    it('should handle Display all sort book', () => {
        expect(
            reducer([], {
                type: types.FILTERED_BOOK,
                filteredData: []
            })
        ).toEqual(
            {
                filteredData: []
            }
        )
    })
    
})