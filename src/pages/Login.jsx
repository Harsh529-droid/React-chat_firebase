import React, { useState } from 'react'
import "../style.scss"
import Add from '../img/addAvatar.png'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


// '/Users/harsh/Desktop/New folder/chat/public/img/addAvatar.png'
const Login = () => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //type of hook

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }

  }

  return (
    <>
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>UChat</span>
                <span className='title'>Login</span>
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />

                    <button>Sign In</button>
                    {loading && <span>Logging you in...</span>}
                    {err && <span>Something went Wrong!</span>}
                </form>
                <p>Don't have an account?
                  <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    </>
  )
}

export default Login