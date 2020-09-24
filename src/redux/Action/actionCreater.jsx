import {DISPLAY_IMAGE,GET_AllCART_METHOD,FILTERED_BOOK,DISPLAY_SNACKBAR,DISPLAY_ALLBOOKS,DISPLAY_ALLBOOKS_INCART, WISHLIST_DATA,DISPLAY_ALL_SEARCH_BOOKS,USER_DATA, ORDER_ID} from './actionType';

//action creater
export  const displayImage = (data) =>{
    console.log("i am in action" ,data);

    return {   //object
        type:DISPLAY_IMAGE,
        payload: data
    }
}
export  const displayAllSearchBook = (data) =>{
    console.log("i am in action search" ,data);

    return {   //object
        type:DISPLAY_ALL_SEARCH_BOOKS,
        searchedData: data
    }
}
export  const displayAllBooks = (data) =>{
   
    return {   //object
        type:DISPLAY_ALLBOOKS,
        allBooks: data,
    }
}
export  const displayAllBooksInCart = (data) =>{
    
    return {   //object
        type:DISPLAY_ALLBOOKS_INCART,
        cartAllBooks: data
    }
}
export  const userInformation = (data) =>{
    
    return {   //object
        type:USER_DATA,
        userData: data
    }
}
export  const snackbarDisplay = (data) =>{
    console.log("i am in action snackbarDisplay" ,data);
        return {   //object
            type:DISPLAY_SNACKBAR,
            snackbarData: data,
            
        }
}
export  const  wishListData = (data) =>{
    console.log("i am in action wishlist" ,data);
        return {   //object
            type: WISHLIST_DATA,
            wishListData: data,
            
        }
}
export  const  filteredData = (data) =>{
    console.log("i am in action FILTERED_BOOK" ,data);
        return {   //object
            type: FILTERED_BOOK,
            filteredData: data,
            
        }
}
export  const   methodData = (data) =>{
    console.log("i am in action method" ,data);
        return {   //object
            type: GET_AllCART_METHOD,
            methodData: data,
            
        }
}
export  const   getOrderId = (data) =>{
    console.log("i am in action method" ,data);
        return {   //object
            type: ORDER_ID,
            orderId: data,
            
        }
}