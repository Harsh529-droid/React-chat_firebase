import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';

            //  an object is passed Headers, pass a var and use it as it is, pass inside {}
                    //
const Message_R = ({message}) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behaviour : "smooth"});
   
  }, [message]);

  return (
    // if owner, message will come in right with changed colors/
    <div 
     ref = {ref}
     className = {`message ${message.senderID === currentUser.uid && "owner"}`} 
    > 
        <div className="messageInfo">
            <img 
              src=
                {
                 message.senderID === currentUser.uid ?  
                 currentUser.photoURL : data.user.photoURL
              } 
              alt="" 
              />
            <span>JN</span>
        </div>
                
        <div className="messageContent">
            <p>{message.text}</p>

            {message.img && <img src={message.img} alt="" />}
        </div>
        
    </div>
  )
}

export default Message_R