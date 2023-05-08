import React from 'react'
import "../style.scss"
import Add from '../img/addAvatar.png'

// '/Users/harsh/Desktop/New folder/chat/public/img/addAvatar.png'
const Register = () => {
  return (
    <>
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>Mama Chat</span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="text" placeholder='password' />

                    <input type="file" id='file' style={{display : "none"}}/>
                      <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add avatar</span>
                      </label>

                    <button>Sign Up</button>
                </form>
                <p>Already have an account?Login</p>
            </div>
        </div>
    </>
  )
}

export default Register