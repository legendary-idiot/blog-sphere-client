import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Register Function
  const createUserWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login Function
  const signInWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Password Reset
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // Update User Data
  const updateUserData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Google Login Function
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogleAuth = () => {
    const result = signInWithPopup(auth, googleProvider)
      .then((result) => {
        const name = result.user.displayName;
        const photo = result.user.photoURL;
        setError(null);
        // Update Profile
        updateUserData(name, photo)
          .then(() => {
            // console.log("Profile Updated Successfully");
            setError(null);
          })
          .catch((error) => {
            // console.log("Error: ", error);
            setError(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log("Error: ", errorCode, errorMessage);
        setError(errorCode);
      });
    return result;
  };

  // Logout User
  const logOutUser = () => {
    return signOut(auth);
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in.
        setUser(currentUser);
      } else {
        // User is signed out.
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUserWithEmailPass,
    signInWithEmailPass,
    signInWithGoogleAuth,
    updateUserData,
    logOutUser,
    resetPassword,
    user,
    loading,
    error,
    setError,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
