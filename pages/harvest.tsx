import type { NextPage } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import btnBack from '../public/bt_voltar.svg';

const Harvest: NextPage = () => {
  return (
    <div className='bg-[#ffcc00] h-screen'>
      <header className='p-4'>
        <NextLink href="/grow">
          <button className='bg-white rounded-full p-3 pb-2 shadow	' >
            <Image width={20} height={20} src={btnBack} alt="botão voltar"/>
          </button>
        </NextLink>
      </header>
      <div className=" w-100 mt-8 flex flex-col justify-center gap-20 items-center mx-8">
        <h1 className='text-4xl text-center'>E COM TODO O TRABALH0 DEDICADO PELO TIME SDU NOS ULTIMOS MESES...</h1>
        <h1 className='text-4xl text-center'>O MAIOR FRUTO CHEGOU</h1>
        <NextLink href="/end"><button className='font-sans text-xl py-4 w-[85%] rounded-full bg-white'>COLHER O FRUTO!</button></NextLink>
      </div>
    </div>
  )
}

export default Harvest;