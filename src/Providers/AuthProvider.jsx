import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser]= useState();
  const [loading, setLoading]= useState(true);
  
  // register using email
  const emailRegister = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // signin using email
  const emailSignin = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  // Signout using email
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
  }
  // google login/register
  const googleLogin= ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider);
  }
  // auth state monitor
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>unsubscribe()
  }, [])


  const value = {
    user,
    setUser,
    loading,
    setLoading,
    emailRegister,
    emailSignin,
    googleLogin,
    logOut,

  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
