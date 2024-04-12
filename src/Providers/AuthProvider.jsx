import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.confige";

export const AuthContext = createContext(null);
//--------------------------------------

const googleProvider = new GoogleAuthProvider();
const gitHubProvider= new GithubAuthProvider()
//----------------------------

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //---------------------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------------------
  const updateUserProfile=(name, image, email,)=>{
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: image
    }).then(() => {
      console.log('succesfull');
      // Profile updated!
      // ...
    }).catch((error) => {
      console.log(error);
      // An error occurred
      // ...
    });
    
    
  }
  //--------------------------------

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //----------------------
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //---------------
  const signInWithGithub = () => {
    return signInWithPopup(auth,gitHubProvider);
  };

  //----------------------

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //---------------------------

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("currenct users", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //----------------------------------
  const authInFo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    signInWithGithub,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInFo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
