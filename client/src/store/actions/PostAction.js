import {__CreatePost, __UpdatePost, __DeletePost, __GetPost, __GetPosts} from '../../services/PostService'
import {UPDATE_POST, DELETE_POST, GET_POSTS, GET_POST, CREATE_POST, HANDLE_POST} from '../types'


export const getPosts = () => async (dispatch) => {
    try {
    const posts = await __GetPosts()
    dispatch({
        type: GET_POSTS,
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

export const getPost = (id) => async (dispatch) => {
    try {
    const posts = await __GetPost(id)
    dispatch({
        type: GET_POST,
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
        console.log(newPost)
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

export const updatePost = (id) => async (dispatch) => {
    try {
    const post = await __UpdatePost(id)
    dispatch({
        type: UPDATE_POST,
        payload: id
    })
    } catch (error) {
    throw error
    }
}