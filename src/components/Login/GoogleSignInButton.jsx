import { AuthContext } from "@/app/context/AuthContext";
import { auth } from "@/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useContext } from "react";

export default function GoogleSignIn() {
    const { _user, _loading, setUser, setLoading } = useContext(AuthContext)
    const googleSignIn = async () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        .catch(error => {
            setLoading(false)
            alert('Ocorreu um erro ao realizar Login, tente novamente')
        })
    }

    return (
        <button 
            className="flex flex-row items-center justify-between w-full max-w-[180px] bg-[#191970] text-white py-2 px-3 my-10 rounded-md hover:opacity-[0.85] font-semibold"
            onClick={googleSignIn}
            >
            <Image
            src={'/google.svg'}
            alt="Logo da Google"
            width={30}
            height={30}/>
            Logar no Google
        </button>
    )
}