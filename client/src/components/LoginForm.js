import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { addLoginForm, addRegisterForm, login, register } from '../store/actions/AuthAction'

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
    console.log(props.AuthState)
    const handleChange=(event) => {
        props.createLogin(event.target.name, event.target.value)
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        let form= { 
            email: props.AuthState.email,
            password: props.AuthState.password
        }
        props.signIn(form)
    }
    return (
    <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Login</button>
        </form>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)