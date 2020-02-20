import {SEARCH_USER, SAVE_INPUT} from '../actions/actionTypes';

const InitialState = {
    users : [],
    userName : ''
}

 const searchUser = (state = InitialState, action) => {
    switch (action) {
        case SEARCH_USER:
            return{ ...state, users : action.payload}
          
            
        case SAVE_INPUT:
            return {...state, userName : action.payload}
            
           
    
        default:
            return state
    }

}
export default searchUser;