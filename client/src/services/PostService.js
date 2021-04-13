import Client from './'


export const GetPost = async () => {
    try {
    const res = await Client.get('/posts')
    return res.data
    } catch (error) {
    throw error
    }
}

export const GetPost = async (id) => {
    try {
    const res = await Client.get(`/posts/${id}`)
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
    const res = await Client.delete(`/post/${id}`)
    return res
    } catch (error) {
    throw error
    }
}


export const UpdatePost = async (id) => {
    try {
        const res = await Client.put(`/post/${id}`)
        return res
    } catch (error) {
        throw error
    }
}