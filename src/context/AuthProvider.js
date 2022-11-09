import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // console.log(user)
  const [loading, setLoading]= useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)

  }

  const loginWithGoogle =(provider)=>{
    return signInWithPopup(auth, provider)
  }



  const updateUserProfile = (profile)=>{
    // console.log(profile)
    
    return updateProfile(auth.currentUser, profile)
  }

  const logoutUser = ()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unsubsribe = onAuthStateChanged( auth, (currentUser)=>{
      // console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    }) 

    return ()=> unsubsribe()
  }, [])
  

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    loginUser,
    loginWithGoogle,
    logoutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
