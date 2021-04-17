const { UPDATE_POST, DELETE_POST, CREATE_POST, GET_POSTS, GET_POST, HANDLE_POST} = require('../types')

const iState ={
    posts:[],
    newPost:{},
    game_id:0,
    comment:''
}

const PostReducer = (state = iState, action) => {
    switch (action.type) {
    case GET_POSTS:
        return { ...state, post: action.payload}
    case GET_POST:
        return{...state, post: action.payload}
    case UPDATE_POST:
        return{...state, post: action.payload}
    case DELETE_POST:
        return{...state, post: action.payload}
    case CREATE_POST:
        return{...state, newPost: action.payload}
    case HANDLE_POST:
        return{...state, comment: action.payload}
    default:
        return {...state}
    }
}
export default PostReducer