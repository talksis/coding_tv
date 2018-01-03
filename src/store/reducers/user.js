import * as actions from '../actions/actionTypes'

export default function user(state={}, action={}){
    switch(action.type){
        case actions.AUTH_USER_LOGGED_IN:
            return {...state, 
                    user: action.user}
        default : return state;
    }
}