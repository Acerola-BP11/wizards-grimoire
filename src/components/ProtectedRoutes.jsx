'use client'

import { AuthContext } from "@/app/context/AuthContext"
import { redirect } from "next/dist/server/api-utils"
import { useContext } from "react"

export default function ProtectedRoutes({children}) {
    const {user, loading} = useContext(AuthContext)
    if(!user){
        redirect(403, '', )
    }
}