import {__CheckSession, __SignIn, __SignUp } from '../../services/AuthService'
import { CHECK_SESSION, LOGIN_FORM, LOGOUT, SIGNUP_FORM, SIGNUP_SUBMIT } from '../types'


export const register = (formData) => async (dispatch) => {
    try {
        const signUp = await __SignUp(formData)
        dispatch({
            type: SIGNUP_SUBMIT,
            payload: signUp
        })
    } catch (error) {
        throw error 
    }
}

export const login = (formData) => async (dispatch) =>{
    try {
        const signIn = await __SignIn(formData)
        console.log(signIn.data)
        dispatch({
            type: CHECK_SESSION,
            payload: signIn.data.current_user,
        })
    } catch (error) {
        throw error
    }
} 

export const addLoginForm = (name, value) => ({
    type: LOGIN_FORM,
    payload: {name:name, value:value}
})

export const addRegisterForm = (name, value) =>({
    
    type: SIGNUP_FORM,
    payload: {name:name, value:value} 
})

export const userSession =  (token) => async (dispatch)=>{
    console.log(token)
    try {
        const checkSession = await __CheckSession(token)
        console.log(checkSession.data)
        dispatch({
            type: CHECK_SESSION,
            payload: checkSession.data
        })
    } catch (error) {
        throw error 
    }
}

export const logOut = () => async (dispatch)=>{
    try {
        dispatch({
            type: LOGOUT, 
            payload: ''
        })
    } catch (error) {
        throw error 
    }
}

