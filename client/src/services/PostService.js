import Client from './'
import { BASE_URL } from './index'

export const GetPost = async () => {
    try {
    const res = await Client.get(`${BASE_URL}/posts`)
    return res.data
    } catch (error) {
    throw error
    }
}

export const GetPost = async (id) => {
    try {
    const res = await Client.get(`${BASE_URL}/posts/${id}`)
    return res
    } catch (error) {
    throw error
    }
}

export const CreatePost = async (formValues) => {
    try {
    const res = await Client.post('/post', formValues)
    return res
    } catch (error) {
    throw error
    }
}

export const DeletePost = async (id) => {
    try {
    const res = await Client.delete(`${BASE_URL}/post/${id}`)
    return res
    } catch (error) {
    throw error
    }
}


export const UpdatePost = async (id) => {
    try {
        const res = await Client.put(`${BASE_URL}/post/${id}`)
        return res
    } catch (error) {
        throw error
    }
}