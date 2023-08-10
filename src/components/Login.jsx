'use client'
import { AuthContext } from "@/app/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";

export default function Login() {
    const {user, loading, googleSignIn, googleSignOut} = useContext(AuthContext)
    return (
        <div className="flex flex-col items-center justify-center text-center w-full max-w-xl bg-transparent text-white">
            <Image
            src={"/images/logo_transparente.png"}
            alt="Logo Transparente"
            width={100}
            height={100}
            className="mx-10"
            />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, facilis! Vero nihil sit saepe necessitatibus quaerat dolore laborum velit veniam incidunt vitae alias rerum, recusandae quis sint ex aut veritatis.</p>
        {!user?<button 
            className="flex flex-row items-center justify-between w-full max-w-[180px] bg-violet-950 text-white py-2 px-3 my-10 rounded-md hover:opacity-[0.85]"
            onClick={googleSignIn}
            >
            <Image
            src={'/google.svg'}
            alt="Logo da Google"
            width={20}
            height={20}/>
            Logar no Google
        </button>:<><h1 className="py-2">Bem Vindo {user.displayName}</h1>
                <button 
                className="flex flex-row items-center justify-center w-full max-w-[180px] bg-violet-950 text-white py-1 px-3 my-10 rounded-md hover:opacity-[0.85]"
                onClick={googleSignOut}
                >
                Deslogar
            </button></>}
        </div>
    )
}