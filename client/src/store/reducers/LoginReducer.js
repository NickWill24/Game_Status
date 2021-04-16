const {LOGIN_FORM, RESET_LOGIN}= require('../types')

const iState= {
    email='',
    password=''
}

const LoginReducer = (state= iState,action) =>{
    switch(action.type){
        case LOGIN_FORM:
            return{...state, email:'', password:''}
        case RESET_LOGIN:
            return{...state}
    }
}

export default LoginReducer