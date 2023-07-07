import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'



 export const AuthContext=createContext();
    const auth=getAuth(app)

const AuthProvider = ({children}) => {
// User movement servilance 

const [user,setUser]=useState(null);

// loading set 
const [loading,setLoading]=useState(true)





// signup 
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

// login
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// logOut
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}



useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log('user observing')
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>unsubscribe();
},[])


// All valous

   const authinfo={
createUser,
signIn,
user,
logOut,
loading


   }
    return (
        <AuthContext.Provider value={ authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;