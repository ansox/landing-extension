import type { NextPage } from 'next'
import Image from 'next/image'
import image3_1 from '../public/tela3_1.png';
import image3_2 from '../public/tela3_2.png';
import image3_3 from '../public/tela3_3.png';
import image3_4 from '../public/tela3_4.png';
import image3_5 from '../public/tela3_5.png';
import btnBack from '../public/bt_voltar.svg';
import NextLink from 'next/link'

const Care: NextPage = () => {
  const images = [image3_1, image3_2, image3_3, image3_4, image3_5]

  return (
    <>
      <header className='m-4'>
      <NextLink href="/choice">
        <button className='rounded-full p-3 pb-2 shadow	' >
          <Image width={20} height={20} src={btnBack} alt="botão voltar"/>
        </button>
      </NextLink>
      </header>
    <div className="w-100 mt-14 flex flex-col justify-center items-center gap-20">
      <h1 className='text-6xl text-center'>ESCOLHA COMO DESEJA CUIDAR</h1>
      {
        images.map(image => (
          <NextLink href="/grow">
            <Image src={image} alt="image 1"/>
          </NextLink>
        ))
      }
      <footer></footer>
    </div>
    </>
  )
}

export default Care;