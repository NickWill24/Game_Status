const {SIGNUP_FORM,SIGNUP_SUBMIT} = require('../types')

const iState ={
    name='',
    email='',
    password='',
    signupSubmitted: false
}

const SignupReducer = (state= iState, action)=>{
    switch(action.type){
    case SIGNUP_FORM:
        return{...state, name:'', email:'', password:''}
    case SIGNUP_SUBMIT:
        return{...state, signupSubmitted: action.payload}
    default:
        return{...state}
    }
}

export default SignupReducer