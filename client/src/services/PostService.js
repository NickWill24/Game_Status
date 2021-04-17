import Client from './index'

export const __GetPost = async () => {
    try {
        const res = await Client.get('/posts')
    return res.data
    } catch (error) {
    throw error
    }
}

export const __GetPosts = async (id) => {
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
    const res = await Client.delete(`/post/${id}`)
    // return res
    } catch (error) {
    throw error
    }
}


export const __UpdatePost = async (id) => {
    try {
        const res = await Client.put(`/post/${id}`)
        // return res
    } catch (error) {
        throw error
    }
}