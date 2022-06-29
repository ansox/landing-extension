import type { NextPage } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import btnBack from '../public/bt_voltar.svg';
import image from '../public/grow.gif';

const Grow: NextPage = () => {
  return (
    <>
      <header className='m-4'>
        <NextLink href="/care">
          <button className='rounded-full p-3 pb-2 shadow	' >
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
    </>
  )
}

export default Grow;