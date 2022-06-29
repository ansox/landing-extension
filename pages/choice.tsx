import type { NextPage } from 'next'
import Image from 'next/image'
import image2_1 from '../public/tela2_1.png';
import image2_2 from '../public/tela2_2.png';
import image2_3 from '../public/tela2_3.png';
import image2_4 from '../public/tela2_4.png';
import image2_5 from '../public/tela2_5.png';
import btnBack from '../public/bt_voltar.svg';
import NextLink from 'next/link'

const Choice: NextPage = () => {
  const images = [image2_1, image2_2, image2_3, image2_4, image2_5]

  return (
    <>
     <header className='m-4'>
      <NextLink href="/">
        <button className='rounded-full p-3 pb-2 shadow	' >
          <Image width={20} height={20} src={btnBack} alt="botão voltar"/>
        </button>
      </NextLink>
      </header>
    <div className="w-100 mt-14 flex flex-col justify-center items-center gap-20">
      <h1 className='text-6xl text-center'>ESCOLHA O QUE DESEJA CULTIVAR</h1>
      {
        images.map(image => (
          <NextLink href="/care">
            <Image src={image} alt="image 1"/>
          </NextLink>
        ))
      }
      <footer></footer>
    </div>
    </>
  )
}

export default Choice;