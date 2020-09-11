import {DISPLAY_IMAGE} from './actionType';

//action creater
export  const displayImage = (data) =>{
    console.log("i am in action")
    return {   //object
        type:DISPLAY_IMAGE,
        payload: data
    }
}