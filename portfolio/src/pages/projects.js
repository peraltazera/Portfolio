import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import {motion} from 'framer-motion'
// import {motion} from '../../public/downloads/PixelChess.rar'


const projects = () => {
  return (
    <>
      <Head>
        <title>Victor Pereira | Projetos</title>
        <meta name="description" content="Portfolio Victor Pereira" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className=' pt-8'>
          <div className=' flex flex-col items-center justify-center w-[100%] mx-auto md:mt-16 mb-32 gap-16 md:gap-32 md:w-[80%]'>
          <AnimatedText text="Conheça meus projetos!" className='mb-2 px-8' />

          <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true}} className=' flex flex-col-reverse w-full justify-center items-center 
            drop-shadow-dark bg-darkSec py-12 px-10 md:rounded-3xl lg:flex-row md:px-12 gap-8 lg:gap-0'>
              <div className=" w-full rounded-2xl object-center h-[220px] bg-[url(../../public/images/projects/OpenChat.png)] bg-cover bg-center lg:w-1/2 md:h-[400px]"></div>
              {/* <Image className=' w-1/2 rounded-2xl object-center h-auto' src={OpenChatPic} /> */}
              <div className=' w-full flex flex-col justify-between px-0 lg:w-1/2 lg:px-8 gap-6'>
                <h2 className=' font-bold text-4xl w-full text-light mt-4'>Open chat<span className=' text-primary'> &nbsp;|&nbsp; </span>Web</h2>
                <p className=' font-medium text-base md:text-lg text-light'>O Open Chat é uma plataforma aberta que permite que você se conecte com qualquer pessoa 
                cadastrada nela através do Gmail. Com essa ferramenta, é possível enviar mensagens para amigos, colegas de trabalho e outras pessoas da sua rede.</p>
                <p className=' font-medium text-base md:text-lg text-light/60'>Web &nbsp;|&nbsp; Javascript &nbsp;|&nbsp; HTML &nbsp;|&nbsp; CSS &nbsp;|&nbsp; React &nbsp;|&nbsp; Next.js</p>
                <div className=' flex items-center self-start gap-6'>
                  <Link href='https://open-chat-victorpereira.vercel.app/' target={'_blank'} className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Acessar</Link>
                  <Link href='https://github.com/peraltazera/Chat' target={'_blank'} className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>GitHub</Link>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true}} className=' flex flex-col w-full justify-center items-center 
            drop-shadow-dark bg-darkSec py-12 px-10 md:rounded-3xl lg:flex-row md:px-12 gap-8 lg:gap-0'>
              <div className=' w-full flex flex-col justify-between px-0 lg:w-1/2 lg:px-8 gap-6'>
                <h2 className=' font-bold text-4xl md:text-4xl w-full text-light mt-4'>Chess Bot<span className=' text-primary'> &nbsp;|&nbsp; </span>Discord</h2>      
                <p className=' font-medium text-base md:text-lg text-light'>O Chess Bot é um bot para Discord que possibilita a criação de partidas de xadrez em seu canal, 
                permitindo que você jogue com seus amigos ou até mesmo contra a inteligência artificial. Com o Chess Bot, é possível desfrutar de uma experiência divertida e 
                desafiadora de xadrez diretamente no Discord. Experimente o Chess Bot e eleve seu jogo de xadrez para o próximo nível!</p>
                <p className=' font-medium text-base md:text-lg text-light/60'>Discord &nbsp;|&nbsp; Javascript &nbsp;|&nbsp; Discord.js &nbsp;|&nbsp; Bot &nbsp;|&nbsp; Node.js &nbsp;|&nbsp; CanvasJs</p>
                <div className=' flex items-center self-start gap-6'>
                  <Link href='https://chess-bot-discord-victorpereira.vercel.app/' target={'_blank'} className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Acessar</Link>
                  <Link href='https://github.com/peraltazera/Chess_Bot_Discord' target={'_blank'} className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>GitHub</Link>
                </div>
              </div>
              <div className=" w-full rounded-2xl object-center h-[220px] bg-[url(../../public/images/projects/ChessBot.png)] bg-cover bg-center lg:w-1/2 md:h-[400px]"></div>
            </motion.div>

            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true}} className=' flex flex-col-reverse w-full justify-center items-center 
            drop-shadow-dark bg-darkSec py-12 px-10 md:rounded-3xl lg:flex-row md:px-12 gap-8 lg:gap-0'>
              <div className=" w-full rounded-2xl object-center h-[220px] bg-[url(../../public/images/projects/ChessUnity.png)] bg-cover bg-center lg:w-1/2 md:h-[400px]"></div>
              <div className=' w-full flex flex-col justify-between px-0 lg:w-1/2 lg:px-8 gap-6'>
                <h2 className=' font-bold text-4xl w-full text-light mt-4'>Pixel Chess<span className=' text-primary'> &nbsp;|&nbsp; </span>Unity</h2>
                <p className=' font-medium text-base md:text-lg text-light'>Pixel Chess é um jogo de xadrez multiplayer local desenvolvido na plataforma Unity. 
                Este jogo envolve estratégia, habilidade e raciocínio lógico, e oferece uma experiência imersiva e divertida para jogadores de todos os níveis. 
                Com sua estética pixel art, Pixel Chess adiciona um toque de nostalgia aos jogos de xadrez modernos.</p>
                <p className=' font-medium text-light/60 text-base md:text-lg'>Unity &nbsp;|&nbsp; C# &nbsp;|&nbsp; 2D &nbsp;|&nbsp; Chess &nbsp;|&nbsp; WebGL &nbsp;|&nbsp; Game</p>
                <div className=' flex items-center self-start gap-6 flex-wrap'>
                  <Link href='https://play.unity.com/mg/other/build-35w-2' target={'_blank'} className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Acessar</Link>
                   <Link href='https://github.com/peraltazera/Chess' target={'_blank'} className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>GitHub</Link>
                   <Link href='/downloads/PixelChess.rar' className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary' download={true}>Windowns</Link>
                   <Link href='/downloads/PixelChess.apk' className=' flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary' download={true}>Android</Link>
                </div>
              </div>
            </motion.div>
            
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects