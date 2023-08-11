import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return(
        <header className="flex flex-row w-full bg-violet-950 items-center justify-start pr-32">
            <Link href={'/'}>
            <Image
            src={"/images/logo_transparente.png"}
            alt="Logo Transparente"
            width={100}
            height={100}
            className="mx-10"
            />
            </Link>
            <ul className="flex flex-row ml-[135px]">
                <li className="mx-5 hover:text-blue-500 hover:border-b hover:border-blue-500 text-white">
                    <Link href={"/campaigns"}>Campanhas</Link>
                </li>
                <li className="mx-5 hover:text-blue-500 hover:border-b hover:border-blue-500 text-white">
                    <Link href={"google.com"}>Elemento 2</Link>
                </li>
                <li className="mx-5 hover:text-blue-500 hover:border-b hover:border-blue-500 text-white">
                    <Link href={"https://www.google.com"}>Elemento 3</Link>
                </li>
            </ul>
        </header>
    )
}