'use client'
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()

export function AuthProvider ({ children }) {
    auth.useDeviceLanguage()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function setAuth(user) {
        setLoading(true)
        if(!user){
            setUser(null)
            setLoading(false)
        }else{
            console.log(user)
            setLoading(false)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (_user) => {
            setAuth(_user)
        })
        return () => unsubscribe()
    }, [])
    
    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}