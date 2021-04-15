import React from 'react'


const loginForm = () =>{
    

    return (
        <div>
            <h1>Login Form</h1>

            <form>
                <input
                type='text'
                name='email'
                // value={name}
                placeholder="XXXXXX@email.com"
                />
                <input
                type='text'
                name="password"
                // value={name}
                placeholder='1234'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default loginForm