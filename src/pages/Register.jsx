import React from 'react'
import addAvatar from '../assets/addAvatar.png';

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
                <input style={{display: 'none'}} type='file' id='file' />
                 <label htmlFor='file'>
                    <img src={addAvatar} alt="avatar" />
                 <span>Add an Avatar</span>
                 </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register