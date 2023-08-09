'use client'
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()

export function AuthProvider ({ children }) {
    auth.useDeviceLanguage()
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    const googleSignOut = () => {
        signOut(auth)
    }
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    function setAuth(user) {
        setLoading(true)
        if(!user){
            setUser(null)
            setLoading(false)
        }else{
            setUser(user)
            setLoading(false)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (_user) => {
            setAuth(_user)
        })
        return () => unsubscribe()
    }, [user])
    
    return (
        <AuthContext.Provider value={{ user, loading, googleSignIn, googleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}