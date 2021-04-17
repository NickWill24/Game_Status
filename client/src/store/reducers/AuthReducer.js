const {SET_AUTHENTICATED, SET_CURRENT_USER, SET_SELECTED_USER}= require('../types')

const iState = {
    name:'',
    email:'' ,
    authenticated: false,
    currentUser: null,
    selectedUser:[]
}

const UserReducer = (state =iState, action) => {
    switch(action.type){
    case SET_AUTHENTICATED:
        return{...state, authenticated: action.payload }
    case SET_CURRENT_USER:
        return{...state, currentUser: action.payload}
    case SET_SELECTED_USER:
        return{...state, selectedUser: action.payload}
    default:
        return state
    }
}

export default UserReducer