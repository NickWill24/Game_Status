import { connect } from 'react-redux'
import React  from 'react'
import { addRegisterForm, register } from '../store/actions/AuthAction'

const mapStateToProps = ({AuthState}) => {
    return  {AuthState}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRegister:(name, value) => dispatch(addRegisterForm(name, value)),
        signUp: (formData) => dispatch(register(formData))
    }
}

const SignUpForm = (props) => {
    const handleChange=(event) => {
        props.createRegister(event.target.name, event.target.value)
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        let form= {
            name: props.AuthState.name, 
            email: props.AuthState.email,
            password: props.AuthState.password
        }
        props.signUp(form)
    }
    return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            placeholder='name'
            value={props.AuthState.name}
            onChange={handleChange}
            />
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
            <button type='submit'>Register</button>
        </form>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)




























// import React from 'react'


// const loginForm = () =>{
    

//     return (
//         <div>
//             <h1>Login Form</h1>

//             <form>
//                 <input
//                 type='text'
//                 name='email'
//                 // value={name}
//                 placeholder="XXXXXX@email.com"
//                 />
//                 <input
//                 type='text'
//                 name="password"
//                 // value={name}
//                 placeholder='1234'
//                 />
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default loginForm