import type { NextPage } from 'next'
import NextLink from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='bg-[#ffcc00] w-100 flex h-screen flex-col justify-center items-center gap-16'>
      <h1 className="text-6xl text-center">Chegou a hora de cuidar da fazenda!</h1>
      <NextLink href="/choice"><button className='font-sans text-xl py-4 w-[85%] rounded-full bg-white'>VAMOS CUIDAR!</button></NextLink>
    </div>
  )
}

export default Home
