'use client'
import { AuthContext } from "@/app/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";
import GoogleSignIn from "./GoogleSignInButton";
import GoogleSignOut from "./GoogleSignOutButton";

export default function Login() {
    const {user, loading} = useContext(AuthContext)
    return (
        <div className="flex flex-col items-center justify-center text-center w-full max-w-xl bg-transparent text-white">
            <Image
            src={"/images/logo_transparente.png"}
            alt="Logo Transparente"
            width={200}
            height={200}
            className="mx-10"
            />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, facilis! Vero nihil sit saepe necessitatibus quaerat dolore laborum velit veniam incidunt vitae alias rerum, recusandae quis sint ex aut veritatis.</p>
        {!loading && (
            !user? (
                <GoogleSignIn/>
            ) : (
                <>
                    <h1 className="py-3 my-6 text-violet-600">Bem Vindo {user.username}</h1>
                    <GoogleSignOut/>
                </>
            ) 
        )}
        </div>
    )
}