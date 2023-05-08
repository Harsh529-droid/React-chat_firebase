import React from 'react'
import "../style.scss"
import Add from '../img/addAvatar.png'

// '/Users/harsh/Desktop/New folder/chat/public/img/addAvatar.png'
const Login = () => {
  return (
    <>
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>Mama Chat</span>
                <span className='title'>Login</span>
                <form action="">
                    <input type="email" placeholder='email' />
                    <input type="text" placeholder='password' />

                    <button>Sign In</button>
                </form>
                <p>Don't have an account?Register</p>
            </div>
        </div>
    </>
  )
}

export default Login