'use client'

import { AuthContext } from "@/app/context/AuthContext";

const { useRouter } = require("next/router");
const { useEffect, useContext } = require("react");

export default function RouteGuard({ children }) {
    const {user, loading, googleSignIn, googleSignOut} = useContext(AuthContext)
    const router = useRouter
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath)

        const hideContent = () => setAuthorized(false);
        router.events.on('RouteChangeStart', hideContent)
        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routerChangeStart', hideContent)
            router.events.off('routerChangeComplete', authCheck)
        }
    }, [])

    function authCheck(url) {
        const publicPaths = ['/']
        const path = url.split('?')[0]
    }
}