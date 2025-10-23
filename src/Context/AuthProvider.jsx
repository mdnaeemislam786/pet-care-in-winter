
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)


  const createUser =(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(user);
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  },[])


  const authInfo = {
    user,
    createUser,
    loginUser,
  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
