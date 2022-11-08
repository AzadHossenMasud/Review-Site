import React from 'react';
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const authInfo = {
        user: {
            name: 'Azad Hossen'
        }
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;