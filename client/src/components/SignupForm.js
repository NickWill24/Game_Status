import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getGames } from '../store/actions/GameAction'
import { addRegisterForm } from '../store/actions/AuthAction'

const mapStateToProps = ({AuthState}) => {
    return  {AuthState}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRegister:(formData) => dispatch(addRegisterForm(formData))
    }
}

const login = (props) => {
    useEffect(() => {
        props.createRegister()
    }, [])
    const handleChange=(event) => {
        props.AuthState.name(event.target.value)
    }
    return (
    <div>
        <h1>Login</h1>
        <form>
            <input
            type='text'
            name='name'
            placeholder='name'
            value={props.AuthState.name}
            // onChange={}
            />
            <input
            type='text'
            name='email'
            placeholder='email'
            value={props.AuthState.email}
            // onChange={}
            />
            <input
            type='text'
            placeholder='password'
            name='password'
            value={props.AuthState.password}
            // onChange={}
            />
            <button type='submit'>Login</button>
        </form>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)()




























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