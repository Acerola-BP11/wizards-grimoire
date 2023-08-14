'use client'
import { auth } from "@/utils/firebase";
import { createContext, useCallback, useEffect, useState } from "react";
export const AuthContext = createContext()

export function AuthProvider ({ children }) {
    auth.useDeviceLanguage()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth => {
            if(auth){
                const formattedUser = {
                    uid: auth.uid,
                    username: auth.displayName,
                    email: auth.email,
                    avatar: auth.photoURL
                }
            setUser(formattedUser)
            setLoading(false)
            }else{
                setUser(null)
                setLoading(false)
            }
        })
        return () => unsubscribe(auth)
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading, setLoading, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}