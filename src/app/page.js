'use client'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Header from '@/components/Header'
import Login from '@/components/Login'


export default function Home() {
  const {user, loading, googleSignIn, googleSignOut} = useContext(AuthContext)
  return (
    <div className='h-screen w-full flex flex-col items-center'>
      <Header/>
      <div className='h-full flex justify-center items-center'>
      <Login
        onClick={googleSignIn}
      />
      </div>
    </div>
  )
}