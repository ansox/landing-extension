import React from "react";
import type { NextPage } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import btnBack from '../public/bt_voltar.svg';
import image from '../public/grow.gif';

const Grow: NextPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/harvest')
    }, 12000)
  }, [])

  return (
    <div className="h-screen bg-[#f3f2d9]">
      <header className='p-4'>
        <NextLink href="/care">
          <button className='bg-white rounded-full p-3 pb-2 shadow	' >
            <Image width={20} height={20} src={btnBack} alt="botão voltar"/>
          </button>
        </NextLink>
      </header>
      <div className="w-100 mt-14 flex flex-col justify-center items-center gap-14">
        <h1 className='text-6xl text-center'>ESPERE CRESCER...</h1>
        <NextLink href="/harvest">
          <Image src={image} alt="image 1"/>
        </NextLink>
      </div>
    </div>
  )
}

export default Grow;