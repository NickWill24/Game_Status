import { connect } from 'react-redux'
import React from 'react'
import { addLoginForm, login } from '../store/actions/AuthAction'

const mapStateToProps = ({AuthState}) => {
    return  {AuthState}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        createLogin:(name, value) => dispatch(addLoginForm(name, value)),
        signIn: (formData) => dispatch(login(formData))
    }
}

const LoginForm = (props) => {
    const handleChange=(event) => {
        props.createLogin(event.target.name, event.target.value)
    }
    const handleSubmit = async (e)  =>{
        e.preventDefault()
        try {
            let form= { 
                email: props.AuthState.email,
                password: props.AuthState.password
            }
            await props.signIn(form)
            
        } catch (error) {
            throw error
        }
        props.history.push('/')
    }
    return (
    <div>
        <h1>Sign In</h1>
        <form>
            <input
            type='text'
            name='email'
            placeholder='email'
            value={props.AuthState.email}
            onChange={handleChange}
            />
            <input
            type='text'
            placeholder='password'
            name='password'
            value={props.AuthState.password}
            onChange={handleChange}
            />
        </form>
        <button onClick={(e)=>handleSubmit(e)}>Login</button>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)