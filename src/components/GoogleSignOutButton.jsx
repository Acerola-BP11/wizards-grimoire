import { auth } from "@/utils/firebase"
import { signOut } from "firebase/auth"

export default function GoogleSignOut() {
    const googleSignOut = () => {
        signOut(auth)
    }
    return (
        <button 
                className="flex flex-row items-center justify-center w-full max-w-[180px] bg-custom-blue text-white py-2 px-3 my-5 rounded-md hover:opacity-[0.85] font-semibold"
                onClick={googleSignOut}
                >
                Deslogar
        </button>
    )
}   