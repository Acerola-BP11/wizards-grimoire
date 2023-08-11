'use client'
import { auth } from "@/utils/firebase";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()

export function AuthProvider ({ children }) {
    auth.useDeviceLanguage()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if(user){
                const formattedUser = {
                    uid: user.uid,
                    username: user.displayName,
                    email: user.email
                }
            setUser(formattedUser)
            setLoading(false)
            }else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => unsubscribe(user)
    }, [auth])
    
    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}