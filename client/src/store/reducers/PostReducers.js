const { UPDATE_POST, DELETE_POST, CREATE_POST, GET_POSTS, GET_POST} = require('../types')

const iState ={
    posts:[],
    newPost:{}
}

const PostReducer = (state = iState, action) => {
    switch (action.type) {
    case GET_POSTS:
        return { ...state, post: action.payload }
    case GET_POST:
        return{...state, post: action.payload}
    case UPDATE_POST:
        return{...state, post: action.payload}
    case DELETE_POST:
        return{...state, post: action.payload}
    case CREATE_POST:
        return{...state, newPost: action.payload}
    default:
        return { ...state }
    }
}
export default PostReducer