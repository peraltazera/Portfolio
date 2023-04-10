import Head from 'next/head'
import Layout from './Layout'
import Image from 'next/image'
import profileImg from '../../public/images/profile/Programming-amico3.png'
import profileImg1 from '../../public/images/profile/1.png'
import profileImg2 from '../../public/images/profile/2.png'
import profileImg3 from '../../public/images/profile/33.png'
import profileImg4 from '../../public/images/profile/4.png'
import profileImg5 from '../../public/images/profile/5.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Pereira | Inicio</title>
        <meta name="description" content="Portfolio Victor Pereira" />
      </Head>
      <main className=' flex items-center text-light w-full mt-0 lg:mt-32 xl:mt-48'>
        <Layout className=' pt-0'>
          <div className=' flex flex-col items-center justify-between w-full md:flex-row px-0 md:px-32'>
            <div className=' w-[100%] flex md:hidden relative xl:flex mb-44 mt-40'>
                  <motion.div initial={{x:0,y:30,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}} className='absolute w-full h-full'>
                    <Image src={profileImg3} alt='VictorPereira' className=' w-[80%] h-auto absolute top-1/2 left-0 -translate-y-1/2'/>
                  </motion.div>
                  <motion.div initial={{x:0,y:-30,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}} className='absolute w-full h-full'>
                    <Image src={profileImg1} alt='VictorPereira' className=' w-[80%] h-auto absolute top-1/2 left-0 -translate-y-1/2'/>
                  </motion.div>
                  <motion.div initial={{x:30,y:0,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}} className='absolute w-full h-full'>
                    <Image src={profileImg4} alt='VictorPereira' className=' w-[80%] h-auto absolute top-1/2 left-0 -translate-y-1/2'/>
                  </motion.div>
                  <motion.div initial={{x:-30,y:0,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}} className='absolute w-full h-full'>
                    <Image src={profileImg2} alt='VictorPereira' className=' w-[80%] h-auto absolute top-1/2 left-0 -translate-y-1/2'/>
                  </motion.div>
                  <motion.div initial={{x:0,y:30,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}} className='absolute w-full h-full'>
                    <Image src={profileImg5} alt='VictorPereira' className=' w-[80%] h-auto absolute top-1/2 left-0 -translate-y-1/2'/>
                  </motion.div>
            </div>
            <div className=' w-full flex flex-col items-center self-center xl:1/2 px-8 md:px-0 mb-20 md:mb-0'>
              <AnimatedText text="Minha missão é transformar a vida das pessoas através da inovação tecnológica." className='!text-4xl sm:!text-4xl lg:!text-5xl !text-left !leading-tight' />
              <p className=' my-4 text-base font-medium'>
              Sou formado em Jogos Digitais pelo IESB e sou um desenvolvedor multidisciplinar, com conhecimento em Desenvolvimento Front-End, Desenvolvimento
              de Jogos para Desktop, Mobile e Web, bem como em UX/UI Design.
              </p>
              {/* <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-7xl !text-left' />
              <p className=' my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p> */}
              {/* <div className=' flex items-center self-start mt-2'>
                <Link href='/about' className=' flex items-center bg-primary text-dark p-2 px-6 rounded-lg text-lg 
                font-semibold hover:bg-dark hover:text-primary border-2 border-solid border-transparent hover:border-primary'>Saiba mais</Link>
              </div> */}
               <div className=' flex items-center self-start'>
                  <Link href='/about' className=' mb-4 mt-4 flex items-center text-primary p-2 px-6 rounded-lg text-lg bg-dark border-primary
                  font-semibold hover:bg-primary hover:drop-shadow-primary hover:text-dark border-2 border-solid hover:border-primary'>Saiba mais</Link>
                </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
