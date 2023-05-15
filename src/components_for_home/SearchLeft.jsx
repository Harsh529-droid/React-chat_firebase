import React, { useState} from 'react'
import '../style.scss'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '../firebase';

const SearchLeft = () => {
            
    const { currentUser } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [Err, setErr] = useState(false);
    const [user, setUser] = useState(null);

    const handleSearch = async () => {

        const userRef = collection(db, "users");
        const q = query(userRef, where("displayName", "==", username));

        try {

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                setUser(doc.data());
            });

        } catch (err) {
            setErr(true);
        }

    }

    const handleKey = (e) => {
        e.code === 'Enter' && handleSearch();
    }

    //**************************for updating the searched user info

    const handleSelect = async (e) => {
        
        e.preventDefault();
        
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

        try {
            
            
            const res = await getDoc(doc(db, "chats", combinedId));
             
            //if not exist, create chat for these two in chat collections
            if (!res.exists()){
                
                await setDoc(doc(db, "chats", combinedId), {messages : []});

                // create user chats

                await updateDoc(doc(db,"userChats", currentUser.uid),{
                         
                    [combinedId + ".userInfo"] : {  // means userInfo part of combinedId
                        uid : user.uid,
                        displayName : user.displayName,
                        photoURL : user.photoURL
                    },
                    [combinedId + ".date"] : serverTimestamp(),
                });
                
                await updateDoc(doc(db,"userChats",user.uid),{
                         
                    [combinedId + ".userInfo"] : {  // means userInfo part of combinedId
                        uid : currentUser.uid,
                        displayName : currentUser.displayName,
                        photoURL : currentUser.photoURL
                    },
                    [combinedId + ".date"] : serverTimestamp(),
                }); 

            }
        }catch(e){
            setErr(true);
        }   
            //     userChats{
            //         janesId{
            //             combinedId1{
            //                 userInfo{

            //                 }
            //                 ,
            //                 lastMessage:,
            //                 date
            //             }
            //             combinedId2{

            //             }..
            //         }
            //     } 
            setUsername("");
            setUser(null);
    } 

    return (
        <div className="search">

            <div className="searchForm">
                <input type="text"
                    placeholder='find a user'
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>


            {Err && <span>User not found!</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />

                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}

        </div>
    )
}

export default SearchLeft