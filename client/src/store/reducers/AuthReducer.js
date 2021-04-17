const {SET_AUTHENTICATED, SET_CURRENT_USER, SET_SELECTED_USER, SIGNUP_FORM, SIGNUP_SUBMIT, LOGIN_FORM, CHECK_SESSION}= require('../types')

const iState = {
    name:'',
    email:'' ,
    password:'',
    authenticated: false,
    currentUser: null,
    selectedUser:[],
    isSubmited: false
}

const AuthReducer = (state =iState, action) => {
    switch(action.type){
    case SET_AUTHENTICATED:
        return{...state, authenticated: action.payload }
    case SET_CURRENT_USER:
        return{...state, currentUser: action.payload}
    case SET_SELECTED_USER:
        return{...state, selectedUser: action.payload}
    case SIGNUP_FORM:
        return{...state, [action.payload.name]: action.payload.value}
    case SIGNUP_SUBMIT:
        return{...state, isSubmited: action.payload}
    case LOGIN_FORM:
        return{...state, [action.payload.name]: action.payload.value}
    case CHECK_SESSION:
        return{...state, currentUser: action.payload, authenticated: true}
    // case RESET_LOGIN:
    //     return{...state, isSubmited: action.payload, currentUser: action.payload ,authenticated: action.payload, }
    default:
        return {...state}
    }
}

export default AuthReducer