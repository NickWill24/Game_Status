import {__CreatePost, __UpdatePost, __DeletePost, __GetPostById, __GetAllPosts} from '../../services/PostService'
import {UPDATE_POST, DELETE_POST, GET_ALL_POSTS, GET_POST_BY_ID,CREATE_POST, HANDLE_POST} from '../types'


export const getPosts = () => async (dispatch) => {
    try {
    const posts = await __GetAllPosts()
    dispatch({
        type: GET_ALL_POSTS,
        payload: posts
    })
    } catch (error) {}
}

export const handlePost = (formvalue) => async (dispatch) =>{
    dispatch({
        type: HANDLE_POST,
        payload: formvalue
    })
}

export const getPostById = (id) => async (dispatch) => {
    try {
    const posts = await __GetPostById(id)
    dispatch({
        type: GET_POST_BY_ID,
        payload: posts
    })
    } catch (error) {}
}

export const createPost = (formvalues) => async (dispatch) =>{
    try {
        const newPost = await __CreatePost(formvalues)
        dispatch({
            type: CREATE_POST, 
            payload: newPost
        })
        return newPost
    } catch (error) {
        throw error
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
    const post = await __DeletePost(id)
    dispatch({
        type: DELETE_POST,
        payload: id
    })
    } catch (error) {
    throw error
    }
}

export const updatePost = (formData, id) => async (dispatch) => {
    try {
    const post = await __UpdatePost(formData, id)
    dispatch({
        type: UPDATE_POST,
        payload: post
    })
    } catch (error) {
    throw error
    }
}