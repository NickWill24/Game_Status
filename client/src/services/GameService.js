import Client from './index'
export const __CreateGame = async (formValues) => {
    try {
        const res = await Client.post('/games', formValues)
        return res
    } catch (error) {
        throw error
    }
}
export const __GetAllGameBlogs = async () => {
    try {
        const res = await Client.get('/games')
        return res.data
    } catch (error) {
        throw error
    }
}
export const __GetGameBlog = async (id) => {
    try {
        const res = await Client.get(`/games/post/${id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}