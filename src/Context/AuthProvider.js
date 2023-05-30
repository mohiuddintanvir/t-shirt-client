import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'



 export const AuthContext=createContext();
    const auth=getAuth(app)

const AuthProvider = ({children}) => {
// User movement servilance 

const [user,setUser]=useState(null)





// signup 
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

// login
const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// logOut
const logOut=()=>{
    return signOut(auth)
}



useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log('user observing')
        setUser(currentUser)
    });
    return ()=>unsubscribe();
},[])


// All valous

   const authinfo={
createUser,
signIn,
user,
logOut


   }
    return (
        <AuthContext.Provider value={ authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;