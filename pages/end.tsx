import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/logo_extension.svg';
import NextLink from 'next/link'
import btnBack from '../public/bt_voltar.svg';
import Link from 'next/link';

const End: NextPage = () => {
  return (
    <>
       <header className='m-4'>
        <NextLink href="/harvest">
          <button className='rounded-full p-3 pb-2 shadow	' >
            <Image width={20} height={20} src={btnBack} alt="botão voltar"/>
          </button>
        </NextLink>
      </header>
      <div className='w-full mt-14 flex flex-col justify-center item-center gap-10'>
        <Image src={logo} alt="logo extension" />

        <Link href="https://extension4.s3.sa-east-1.amazonaws.com/extension4.apk">
          <div className='bg-[#ffcc00] mx-6 p-6 rounded-xl uppercase'>
            <a className='text-center font-sans text-lg '>Baixar a nova versão do extension solution</a>
          </div>
        </Link>
      </div>
      
    </>
  )
}

export default End;