import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("currentUser", currentUser);
        setUser(currentUser);
        setLoading(false)
    })
    return unsubscribe;
  }, [])

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (username, image) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: image,
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const authInfo = {
    user,
    createUser,
    updateUser,
    login,
    logout,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-lg text-accent"></span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;