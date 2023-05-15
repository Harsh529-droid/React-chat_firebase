import React, { useContext } from 'react'
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import MessagesRight from './MessagesRight';
import InputRight from './InputRight';
import { ChatContext } from '../Context/ChatContext';

const ChatRight = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className="chat">
       <div className="chatInfo">
           <span>{data.user?.displayName}</span>
           <div className="chatIcons">
               <img src={Cam} alt="" />
               <img src={Add} alt="" />
               <img src={More} alt="" />
           </div>
       </div>

       <MessagesRight />
       
       <InputRight />
    </div>
  )
}

export default ChatRight