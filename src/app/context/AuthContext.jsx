import { useState, useEffect, createContext, useContext } from "react";
import Firebase from "../../utils/firebase"

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }

        setLoading(true)
        let fromattedUser = formatAuthUser(authState)
        setAuthUser(fromattedUser)
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        loading
    }
}

const AuthUserContext = createContext({
    authUser: null,
    loading: true
})

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth()
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext)