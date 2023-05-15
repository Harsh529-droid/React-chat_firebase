import React, { useContext, useEffect, useReducer, useState } from 'react'
import '../style.scss'
import { AuthContext } from '../Context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../Context/ChatContext';

const ChatLogLeft = () => {

    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);
    

    useEffect(() => {

        const getChats = () => {

            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                // console.log(doc.data());
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        }

        currentUser.uid && getChats()  //  === if(currentUser.uid)getChats();
        //if user id is not null, then call the getChats function 
    }, [currentUser.uid]); //listening all the variables in array
   
    const handleSelect = (user) => {
        dispatch({type : "CHANGE_USER", payload : user })
    }

    return (
        <>
            <div className="chats">

                                                      {/* this needs to be closed bracket '(' , not curly '{' */}
                {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date ).map((chat) => (  
                    <div className="userChat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                                                                  {/* () => is important */}
                                                                  {/* else uncaught error infinitely */}
                        <img src={chat[1].userInfo.photoURL} alt="ads" />

                        <div className="userChatInfo">
                            <span>{chat[1].userInfo.displayName}</span>
                            <p>{chat[1].lastMessage?.text}</p>
                        </div>
                    </div>
                ))}
              {/* } xx     ) tick */}

            </div>
        </>
    );
}

export default ChatLogLeft