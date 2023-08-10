import { auth } from "@/utils/firebase";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";

export default function GoogleSignIn() {
    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const username = user.displayName
        const email = user.email
        await axios.post('api/verifyUser', {
            userToken: token,
            email: email,
            username: username
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then()
            
    }

    return (
        <button 
            className="flex flex-row items-center justify-between w-full max-w-[180px] bg-violet-950 text-white py-2 px-3 my-10 rounded-md hover:opacity-[0.85]"
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