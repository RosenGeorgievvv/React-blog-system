import React from 'react'

const Register = () => {
  return (
    <div className='main-form'>
        <div className='main-wrapper'>
            <span className='header'>F2F Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input type='file' />
            </form>
        </div>
    </div>
  )
}

export default Register