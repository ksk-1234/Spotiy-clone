import {LOGIN,LOGOUT} from './actions' 
const initialState = {
    username : "",
    issuccess : false
}
function loginReducer (state=initialState, action) {
    switch(action.type){
        case LOGIN:            
            return {...state, username : action.payload, issuccess:true}
        case LOGOUT:
            return{...state,username:"",issuccess:false}
        default:
            return state;
    }
}
export default loginReducer