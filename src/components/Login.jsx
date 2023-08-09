import Image from "next/image";

export default function Login({googleSignIn}) {
    return (
        <div className="flex flex-col items-center justify-center text-center w-full max-w-xl bg-white h-">
            <Image
            src={"/images/logo_transparente.png"}
            alt="Logo Transparente"
            width={100}
            height={100}
            className="mx-10"
            />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, facilis! Vero nihil sit saepe necessitatibus quaerat dolore laborum velit veniam incidunt vitae alias rerum, recusandae quis sint ex aut veritatis.</p>
        <button 
            className="flex flex-row items-center justify-between w-full max-w-[180px] bg-violet-950 text-white py-2 px-3 my-10 rounded-md hover:opacity-[0.85]"
            onClick={googleSignIn}
            >
            <Image
            src={'/google.svg'}
            alt="Logo da Google"
            width={20}
            height={20}/>
            Logar no Google
        </button>
        </div>
    )
}