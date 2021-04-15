import {CreatePost, UpdatePost, DeletePost, GetPost, GetPosts} from '../../services/PostService'
import {UPDATE_POST, DELETE_POST, GET_POSTS, GET_POST, CREATE_POST} from '../types'


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

export const createPost = (formvalues) => async (dispatch) =>{
    try {
        const newPost = await CreatePost(formvalues)
        dispatch({
            type: CREATE_POST
        })
        return newPost
    } catch (error) {
        throw error
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
    const post = await DeletePost(id)
    dispatch({
        type: DELETE_POST,
        payload: id
    })
    } catch (error) {
    throw error
    }
}

export const updatePost = (id) => async (dispatch) => {
    try {
    const post = await UpdatePost(id)
    dispatch({
        type: UPDATE_POST,
        payload: id
    })
    } catch (error) {
    throw error
    }
}