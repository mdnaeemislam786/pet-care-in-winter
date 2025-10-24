import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Create user with profile update
  const createUser = async (email, password, name, photo) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Create user error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //  Update profile
  const updateProfileUser = async (updateName, updatePhoto) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: updateName,
        photoURL: updatePhoto,
      });
      setUser(auth.currentUser);
      return auth.currentUser;
    } catch (error) {
      console.error("Update profile error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        updateProfileUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
