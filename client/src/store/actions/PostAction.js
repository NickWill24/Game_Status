import {CreatePost, UpdatePost, DeletePost, GetPost, GetPosts} from '../../services/PostService'
import {UPDATE_POST, CREATE_POST, DELETE_POST, GET_POSTS, GET_POST} from '../types'


export const getPosts = () => async (dispatch) => {
    try {
    const posts = await GetPosts()
    dispatch({
        type: GET_POSTS,
        payload: posts
    })
    } catch (error) {}
}

export const getPost = (id) => async (dispatch) => {
    try {
    const posts = await GetPost(id)
    dispatch({
        type: GET_POST,
        payload: posts
    })
    } catch (error) {}
}