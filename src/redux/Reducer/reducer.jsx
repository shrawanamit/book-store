import { DISPLAY_IMAGE, FILTERED_BOOK, WISHLIST_DATA, DISPLAY_ALLBOOKS, DISPLAY_ALL_SEARCH_BOOKS } from '../Action/actionType';

const initialState = {
    imageURL: '',
    open: false,
    snackBarMeessage: '',
    allBooks: [],
    searchedData: [],
    wishListData: [],
    filteredData: [],
}


const bookReducer = (state = initialState, action) => {

    switch (action.type) {
        case DISPLAY_ALLBOOKS:
           
            return {
                ...state,
                allBooks: [...action.allBooks]
            }
        case DISPLAY_IMAGE:
            return {
                ...state,
                imageURL: action.payload,
            }
        case DISPLAY_ALL_SEARCH_BOOKS:
            return {
                ...state,
                searchedData: [...action.searchedData],
            }
        case WISHLIST_DATA:
            console.log("i am in reducer all wish list");
            return {
                ...state,
                wishListData: [...action.wishListData],
            }
        case FILTERED_BOOK:
            return {
                ...state,
                filteredData: [...action.filteredData],
            }


        default: return state
    }
}

export default bookReducer;