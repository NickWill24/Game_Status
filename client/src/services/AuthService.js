import Client from './index'



export const __SignUp = async (formvalue) => {
    try {
        const res = await Client.post('/auth/register', formvalue)
        return res
    } catch (error) {
        throw error
    }
}


export const __SignIn = async (formvalue) => {
    try {
        const res = await Client.post('/auth/login', formvalue)
        localStorage.setItem('token', res.data.token)
        return res
    } catch (error) {
        throw error
    }
}

export const __CheckSession= async (token) => {
    try {
        const res= await Client.get('/auth/login')
        return res
    } catch (error) {
        throw error
    }
}
