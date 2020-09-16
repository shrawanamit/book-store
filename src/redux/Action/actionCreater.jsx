import {DISPLAY_IMAGE,DISPLAY_SNACKBAR, DISPLAY_ALLBOOKS,DISPLAY_ALLBOOKS_INCART} from './actionType';

//action creater
export  const displayImage = (data) =>{
    console.log("i am in action" ,data);

    return {   //object
        type:DISPLAY_IMAGE,
        payload: data
    }
}
export  const displaySnackBar = (data) =>{
    console.log("i am in action snake" ,data);

    return {   //object
        type:DISPLAY_SNACKBAR,
        payload: data
    }
}
export  const displayAllBooks = (data) =>{
    
    return {   //object
        type:DISPLAY_ALLBOOKS,
        allBooks: data,
    }
}
export  const displayAllBooksInCart = (data) =>{
    console.log("i am in action cart" ,data);

    return {   //object
        type:DISPLAY_ALLBOOKS_INCART,
        cartAllBooks: data
    }
}