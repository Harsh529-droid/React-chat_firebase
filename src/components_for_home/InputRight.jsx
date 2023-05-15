import React, { useContext, useState } from 'react'
import Smile from '../img/Smile.png'
import Attach from '../img/attach.png'
import Mic from '../img/mic.png'
import { AuthContext } from '../Context/AuthContext'
import { ChatContext } from '../Context/ChatContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const InputRight = () => {
  const [text, setText] = useState(null);
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    console.log(data);
    if (img) {

      const date = new Date().getTime();
      const storageRef = ref(storage, uuid());

      uploadBytesResumable(storageRef, img).then(() => {

        getDownloadURL(storageRef).then(async (downloadURL) => {
          console.log(downloadURL);

          await updateDoc(doc(db, "chats", data.chatID), {

            messages: arrayUnion({
              id: uuid(),
              text,     //eqvalent to  text : text
              senderID: currentUser.uid,
              date: date,
              img : downloadURL,
              })
            });
         
        });
      });

    } else if(text){

      await updateDoc(doc(db, "chats", data.chatID), {

        messages: arrayUnion({
          id: uuid(),
          text,     //eqvalent to  text : text
          senderID: currentUser.uid,
          date: Timestamp.now(),                //cant use servertimestamp here
        })
      });

      
      await updateDoc(doc(db,"userChats", currentUser.uid), {
        [data.chatID + ".lastMessage"] : {
          text,
        },
        [data.chatID + ".date"] : serverTimestamp(),
        
      });
      
      await updateDoc(doc(db,"userChats", data.user.uid), {
        [data.chatID + ".lastMessage"] : {
          text,
        },
        [data.chatID + ".date"] : serverTimestamp(),
        
      });
    }
      
    setImg(null);
    setText(null);
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSend();
  }

  return (

    <div className="input">
      <div className="send">
        <img src={Smile} alt="" />

        <input type="file" style={{ display: "none" }} id='file' onChange={(e) => setImg(e.target.files[0])} />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
      </div>
      <input type="text" placeholder='type a message' 
      onKeyDown={handleKey}
      onChange={(e) => setText(e.target.value)} />
      <div className='send'>
        <img src={Mic} alt="" />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default InputRight