import {SEARCH_USER, SAVE_INPUT} from './actionTypes';


export const searchUser = (user) =>({
    type : SEARCH_USER,
    payload : user
}) 

export const saveInput = (name) =>{
    return{
        type : SAVE_INPUT,
        payload : name
    }
}