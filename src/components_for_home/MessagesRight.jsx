import React, { useContext, useEffect, useState } from 'react'
import Message_R from './Message_R'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../Context/ChatContext';

const MessagesRight = () => {

  const {data} = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const unsub = onSnapshot(doc(db,"chats",data.chatID), doc => {
       
       doc.exists() && setMessages(doc.data().messages);
    });
   
    return () => {
      unsub();

    };

  }, [data.chatID]);


  return (
    <div className="messages">
       
       {messages.map( (m) => (
         
         <Message_R  message = {m} key={m.id}/>
       ))}
      
    </div>
  )
}

export default MessagesRight