const { UPDATE_POST, DELETE_POST, CREATE_POST, GET_ALL_POSTS, GET_POST_BY_ID, HANDLE_POST,} = require('../types')

const iState ={
    posts:[],
    newPost:{},
    game_id:0,
    comment:'',
    edit:{},
    currentPost:{}
}

const PostReducer = (state = iState, action) => {
    switch (action.type) {
    case GET_ALL_POSTS:
        return { ...state, post: action.payload}
    case GET_POST_BY_ID:
        return{...state, currentPost: action.payload}
    case UPDATE_POST:
        return{...state, edit: action.payload}
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