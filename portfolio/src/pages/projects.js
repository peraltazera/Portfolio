import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import AnimatedText from '@/components/AnimatedText'
import ChessBotPic from '../../public/images/projects/ChessBot.png'
import OpenChatPic from '../../public/images/projects/OpenChat.png'
import ChessUnityPic from '../../public/images/projects/ChessUnity.png'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import projectPic from '../../public/images/projects/OpenChat.png'

const projects = () => {
  return (
    <>
      <Head>
        <title>Victor Pereira | Projetos</title>
        <meta name="description" content="Portfolio Victor Pereira" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className=' pt-16'>
          <div className=' flex flex-col items-center justify-center w-[100%] mx-auto md:mt-16 mb-32 gap-16 md:gap-32 md:w-[80%]'>
          <AnimatedText text="Imaginação supera conhecimento!" className='mb-2 px-8' />

          <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true}} className=' flex flex-col-reverse w-full justify-center items-center 
            drop-shadow-dark bg-darkSec py-12 px-10 md:rounded-3xl lg:flex-row md:px-12 gap-8 lg:gap-0'>
              <div className=" w-full rounded-2xl object-center h-[220px] bg-[url(../../public/images/projects/OpenChat.png)] bg-cover bg-center lg:w-1/2 md:h-[400px]"></div>
              {/* <Image className=' w-1/2 rounded-2xl object-center h-auto' src={OpenChatPic} /> */}
              <div className=' w-full flex flex-col justify-between px-0 lg:w-1/2 lg:px-8 gap-6'>
                <h2 className=' font-bold text-4xl w-full text-light mt-4'>Open chat<span className=' text-primary'> &nbsp;|&nbsp; </span>Web</h2>
                <p className=' font-medium text-lg text-light'>O Open chat é uma plataforma aberta que permite que você se conecte com qualquer pessoa cadastrada no Google Gmail. 
                Com essa ferramenta, é possível enviar mensagens para amigos, colegas de trabalho e outras pessoas de sua rede.</p>
                <p className=' font-medium text-light/60'>Web &nbsp;|&nbsp; Javascript &nbsp;|&nbsp; HTML &nbsp;|&nbsp; Tailwind &nbsp;|&nbsp; ReactJs &nbsp;|&nbsp; NextJs</p>
                <div className=' flex items-center self-start gap-6'>
                  <Link href='https://open-chat-victorpereira.vercel.app/' target={'_blank'} className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Acessar</Link>
                  <Link href='https://github.com/peraltazera/Chat' target={'_blank'} className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>GitHub</Link>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true}} className=' flex flex-col w-full justify-center items-center 
            drop-shadow-dark bg-darkSec py-12 px-10 md:rounded-3xl lg:flex-row md:px-12 gap-8 lg:gap-0'>
              <div className=' w-full flex flex-col justify-between px-0 lg:w-1/2 lg:px-8 gap-6'>


                <h2 className=' font-bold text-4xl md:text-4xl w-full text-light mt-4'>Chess Bot<span className=' text-primary'> &nbsp;|&nbsp; </span>Discord</h2>

                
                <p className=' font-medium text-lg text-light'>O Open chat é uma plataforma aberta que permite que você se conecte com qualquer pessoa cadastrada no Google Gmail. 
                Com essa ferramenta, é possível enviar mensagens para amigos, colegas de trabalho e outras pessoas de sua rede.</p>
                <p className=' font-medium text-light/60'>Discord &nbsp;|&nbsp; Javascript &nbsp;|&nbsp; Discord.js &nbsp;|&nbsp; Bot &nbsp;|&nbsp; NodeJs &nbsp;|&nbsp; CanvasJs</p>
                <div className=' flex items-center self-start gap-6'>
                  <Link href='https://chess-bot-discord-victorpereira.vercel.app/' target={'_blank'} className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Acessar</Link>
                  <Link href='https://github.com/peraltazera/Chess_Bot_Discord' target={'_blank'} className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>GitHub</Link>
                </div>
              </div>
              <div className=" w-full rounded-2xl object-center h-[220px] bg-[url(../../public/images/projects/ChessBot.png)] bg-cover bg-center lg:w-1/2 md:h-[400px]"></div>
            </motion.div>

            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true}} className=' flex flex-col-reverse w-full justify-center items-center 
            drop-shadow-dark bg-darkSec py-12 px-10 md:rounded-3xl lg:flex-row md:px-12 gap-8 lg:gap-0'>
              <div className=" w-full rounded-2xl object-center h-[220px] bg-[url(../../public/images/projects/ChessUnity.png)] bg-cover bg-center lg:w-1/2 md:h-[400px]"></div>
              <div className=' w-full flex flex-col justify-between px-0 lg:w-1/2 lg:px-8 gap-6'>
                <h2 className=' font-bold text-4xl w-full text-light mt-4'>Chess<span className=' text-primary'> &nbsp;|&nbsp; </span>Unity</h2>
                <p className=' font-medium text-lg text-light'>O Open chat é uma plataforma aberta que permite que você se conecte com qualquer pessoa cadastrada no Google Gmail. 
                Com essa ferramenta, é possível enviar mensagens para amigos, colegas de trabalho e outras pessoas de sua rede.</p>
                <p className=' font-medium text-light/60'>Unity &nbsp;|&nbsp; C#& &nbsp;|&nbsp; 2D& &nbsp;|&nbsp; Chess& &nbsp;|&nbsp; Webgl &nbsp;|&nbsp; Game</p>
                <div className=' flex items-center self-start gap-6 flex-wrap'>
                  <Link href='https://play.unity.com/mg/other/build-35w-2' target={'_blank'} className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Acessar</Link>
                   <Link href='https://github.com/peraltazera/Chess' target={'_blank'} className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>GitHub</Link>
                   <Link href='https://github.com/peraltazera/Chess' className=' mb-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Download</Link>
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