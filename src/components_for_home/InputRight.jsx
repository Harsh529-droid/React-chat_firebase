import React from 'react'
import Smile from '../img/Smile.png'
import Attach from '../img/attach.png'
import Mic from '../img/mic.png'

const InputRight = () => {
  return (
    <div className="input">
       <div className="send">
          <img src={Smile} alt="" />
          
          <input type="file" style={{display : "none"}} id='file' />
             <label htmlFor="file">
               <img src={Attach} alt="" />
             </label> 
       </div>
       <input type="text" placeholder='type a message' />
       <div className='send'>
         <img src={Mic} alt="" />
         <button>Send</button>
       </div>
    </div>
  )
}

export default InputRight