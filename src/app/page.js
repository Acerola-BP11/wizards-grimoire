import Header from '@/components/Header'
import Login from '@/components/Login'

export default function Home() {
  return (
    <div className='h-screen w-full flex flex-col items-center'>
      <Header/>
      <div className='h-full flex justify-center items-center'>
      <Login/>
      </div>
    </div>
  )
}