import {__CheckSession, __SignIn, __SignUp } from '../../services/AuthService'
import { CHECK_SESSION, LOGIN_FORM, SET_CURRENT_USER, SIGNUP_FORM, SIGNUP_SUBMIT } from '../types'


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
        dispatch({
            type: CHECK_SESSION,
            payload: signIn.current_user,
        })
    } catch (error) {
        throw error
    }
} 

export const addLoginForm = (formData) => ({
    type: LOGIN_FORM,
    payload: formData
})

export const addRegisterForm = (formData) =>({
    type: SIGNUP_FORM,
    payload: formData, 
})

export const userSession =  (token) => async (dispatch)=>{
    console.log(token)
    try {
        const checkSession = await __CheckSession(token)
        dispatch({
            type: CHECK_SESSION,
            payload: checkSession
        })
    } catch (error) {
        throw error 
    }
}


