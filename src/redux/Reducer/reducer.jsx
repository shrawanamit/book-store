import { DISPLAY_IMAGE, WISHLIST_DATA, DISPLAY_ALLBOOKS, DISPLAY_ALL_SEARCH_BOOKS } from '../Action/actionType';

const initialState = {
    imageURL: '',
    open: false,
    snackBarMeessage: '',
    allBooks: [],
    searchedData: [],
    wishListData:[]
}


const bookReducer = (state = initialState, action) => {

    switch (action.type) {
        case DISPLAY_ALLBOOKS:
            console.log("i am in reducer all book reducer");
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
            return {
                ...state,
                wishListData: [...action.wishListData],
            }


        default: return state
    }
}

export default bookReducer;