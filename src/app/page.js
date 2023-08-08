'use client'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


export default function Home() {
  const {user, googleLogin, googleLogout} = useContext(AuthContext)
  const handleLogin = async () => {
    try {
      await googleLogin()
        .then(user => console.log(user))
    } catch (error) {
      console.log(error)
    }
  }
  const handleLogout = async () => {
    googleLogout()
  }
  return (
    <main>
      <button onClick={handleLogin}>Logar</button>
      <button onClick={handleLogout}>Sair</button>
    </main>
  )
}
