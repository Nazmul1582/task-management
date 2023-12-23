import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
} 


const authInfo = {
    createUser
}

const AuthProvider = ({children}) => {
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;