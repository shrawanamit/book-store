import {DISPLAY_IMAGE,DISPLAY_SNACKBAR, DISPLAY_ALLBOOKS} from './actionType';

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
    console.log("i am in action ALL BOOKS" ,data);

    return {   //object
        type:DISPLAY_ALLBOOKS,
        allBooks: data,
    }
}