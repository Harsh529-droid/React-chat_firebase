//to check whether there is a user logged in or not

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext(); 

export const AuthContextProvider = ({children}) => {
  
     const[currentUser, setCurrentUser]  = useState({});

     useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
        })
        return () => { //always use to avoid memory leakage, especially for RealTime Operations
            unsub();
        };
     }, []);

     return(
        <AuthContext.Provider value = {{currentUser}}>
            {children}
        </AuthContext.Provider>
     );
};

