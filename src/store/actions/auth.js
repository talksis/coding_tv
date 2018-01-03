import * as actions from './actionTypes'
import api from '../../shared/api'

export const userLoggedIn =(user)=>{
    return {
        type:actions.AUTH_USER_LOGGED_IN,
        user
    }
}
export const login = (credentials)=>(dispatch)=>
    api.user.login(credentials)
        .then(user=>dispatch(userLoggedIn(user)))