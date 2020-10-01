import * as types from '../redux/Action/actionType';
import * as actions from '../redux/Action/actionCreater'

describe('actions', () => {
  it('should create an action to display all books', () => {
    const  allBooks = [];
    const displayAllBooks ={ 
            type:types.DISPLAY_ALLBOOKS,
            allBooks
        }
    expect(actions.displayAllBooks(allBooks)).toEqual(displayAllBooks)
  })
  it('should create an action to display all search  books', () => {
    const searchedData = [];
    const displayAllSearchBook ={ 
            type:types.DISPLAY_ALL_SEARCH_BOOKS,
            searchedData
        }
    expect(actions.displayAllSearchBook(searchedData)).toEqual(displayAllSearchBook)
  })
  it('should create an action to display all  cart books', () => {
    const  cartAllBooks = [];
    const displayAllBooksInCart ={ 
            type:types.DISPLAY_ALLBOOKS_INCART,
            cartAllBooks
        }
    expect(actions.displayAllBooksInCart(cartAllBooks)).toEqual(displayAllBooksInCart)
  })

  it('should create an action to display user information', () => {
    const  userData = [];
    const userInformation ={ 
            type:types.USER_DATA,
            userData
        }
    expect(actions.userInformation(userData)).toEqual(userInformation)
  })

  it('should create an action to display all wishlist books', () => {
    const  wishListData = [];
    const wishList ={ 
            type:types.WISHLIST_DATA,
            wishListData
        }
    expect(actions.wishListData(wishListData)).toEqual(wishList)
  })

  it('should create an action to display all wishlist books', () => {
    const  orderId = '';
    const getOrderId ={ 
            type:types.ORDER_ID,
            orderId
        }
    expect(actions.getOrderId(orderId)).toEqual(getOrderId)
  })

  it('should create an action to display all short books', () => {
    const  filteredData = [];
    const filtered ={ 
            type:types.FILTERED_BOOK,
            filteredData
        }
    expect(actions.filteredData(filteredData)).toEqual(filtered)
  })
})
