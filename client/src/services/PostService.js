import Client from './index'

export const __GetAllPosts = async () => {
    try {
        const res = await Client.get('/posts')
    return res.data
    } catch (error) {
    throw error
    }
}

export const __GetPostById = async (id) => {
    try {
    const res = await Client.get(`/posts/${id}`)
    return res
    } catch (error) {
    throw error
    }
}

export const __CreatePost = async (formValues) => {
    try {
    const res = await Client.post('/posts', formValues)
    return res
    } catch (error) {
    throw error
    }
}

export const __DeletePost = async (id) => {
    try {
    const res = await Client.delete(`/posts/${id}`)
    return res
    } catch (error) {
    throw error
    }
}


export const __UpdatePost = async (formData, id) => {
    try {
        const res = await Client.put(`/posts/${id}`, formData)
        return res.data
    } catch (error) {
        throw error
    }
}