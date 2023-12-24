import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
} 

const updateUser = (username, image) => {
    return updateProfile(auth.currentUser, {
        displayName: username, 
        photoURL: image
    })
}

const authInfo = {
    createUser,
    updateUser
}

const AuthProvider = ({children}) => {
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;