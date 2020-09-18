import {DISPLAY_IMAGE,DISPLAY_SNACKBAR,DISPLAY_ALLBOOKS,DISPLAY_ALLBOOKS_INCART,DISPLAY_ALL_SEARCH_BOOKS} from './actionType';

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
    console.log("i am in action all books" ,data);
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
