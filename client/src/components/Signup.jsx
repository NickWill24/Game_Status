import React from 'react'



const signup = () => {
    return(
        <div>
            <h1>Sign up Page</h1>
            <form>
                <input
                type='text'
                name='name'
                placeholder='name'
                />
                <input
                type='text'
                name='email'
                placeholder='email'
                />
                <input
                type='text'
                name='password'
                placeholder='password'
                />
            </form>
        </div>
    )
}

export default signup