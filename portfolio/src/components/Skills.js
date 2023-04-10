import React from 'react'
import '../styles/Skills.module.css'
import Image from 'next/image'
import profileImg from '../../public/images/profile/developer-pic-2.jpg'
import { DiReact, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiJavascript, SiUnity, SiCsharp, SiTailwindcss } from 'react-icons/si';
import { BlockchainIcon, CsharpIcon, CssIcon, FirebaseIcon, HtmlIcon, JsIcon, NextIcon, NodeIcon, ReactIcon, TailwindIcon, UnityIcon } from './Icons';
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    console.log(Math.floor(Math.random() * (30 - (-30) + 1)) + -30)
    return (
        <motion.div className=' shadow-lg drop-shadow-primary flex items-center justify-center rounded-full font-semibold bg-primary text-dark cursor-pointer absolute 
        py-1 px-2 text-sm
        sm:py-2 sm:px-4 sm:text-md
        md:py-3 md:px-6 md:text-lg
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {

// return (
//     <>
//      <h2 className=' font-bold text-8xl mt-64 w-full text-center mb-32 text-dark'>Habilidades</h2>
//      <div className=' grid w-full grid-cols-12 gap-16'>

//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl bg-dark p-8'>
//              <div className=' absolute top-0 -right-1 -z-10 w-[102%] h-[102%] rounded-[1rem] bg-rose-600' />
//              <div className=' absolute bottom-0 right-1 -z-10 w-[102%] h-[102%] rounded-[1rem] bg-teal-400' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <HtmlIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg text-light'>HTML</h3>
//          </div>

//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <HtmlIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>HTML</h3>
//          </div>

//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <CssIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>CSS</h3>
//          </div>

//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <JsIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Javascript</h3>
//          </div>
         
//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <NodeIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Node JS</h3>
//          </div>
         
//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <ReactIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>React</h3>
//          </div>
         
//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <TailwindIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Tailwind</h3>
//          </div>
         
//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <NextIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Next JS</h3>
//          </div>

//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <FirebaseIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Firebase</h3>
//          </div>
         
//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <UnityIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Unity</h3>
//          </div>
         
//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <CsharpIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>C#</h3>
//          </div>

//          <div className=' w-52 flex flex-col items-center col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
//              <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark' />
//              {/* <Image src={profileImg} alt='VictorPereira' className=' w-full h-auto rounded-2xl'/> */}
//              <BlockchainIcon className=" w-24" />
//              <h3 className=' mt-6 font-bold text-lg'>Blockchain</h3>
//          </div>
         
//      </div>
//     </>
//   )

// return (
//     <>
//         <h2 className=' font-bold text-8xl mt-64 w-full text-center mb-32 text-dark'>Habilidades</h2>
//         <div className=" relative">
//             <div className="absolute h-4 w-4 bg-black rounded-full"></div>
//             <div className="absolute h-4 w-4 bg-black rounded-full right-0"></div>
//             <div className="absolute top-2 left-0 right-0 border-t border-black"></div>
//         </div>
//     </>
// )

return (
    <div className='px-8 sm:px-24 md:px-32 mt-32 md:mt-48'>
        <h2 className=' font-bold text-4xl md:text-6xl lg:text-8xl w-full text-center text-light pb-12 sm:pb-0'>Habilidades</h2>
        <div className=' relative flex items-center justify-center rounded-full 
        bg-circularDarkSm h-[20vh]
        xl:bg-circularDark xl:h-screen
        lg:bg-circularDarkLg lg:h-[80vh]
        md:bg-circularDarkMd md:h-[50vh]
        sm:bg-circularDarkSm sm:h-[40vh]
        '>
            <motion.div className=' shadow-lg drop-shadow-primary flex items-center justify-center rounded-full font-semibold bg-primary text-dark cursor-pointer
             p-2 text-sm
             sm:p-4 sm:text-md
             md:p-6 md:text-lg' 
            whileHover={{scale:1.05}}>
                Web
            </motion.div>

            {/* <Skill name="HTML" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="CSS" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="Javascript" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="C#" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="Unity" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="NodeJs" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="NextJs" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="Firebase" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="Tailwind" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="Blockchain" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} />
            <Skill name="React" x={`${Math.floor(Math.random() * (30 - (-30) + 1)) + (-30)}vw`} y={`${Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)}vw`} /> */}

            <Skill name="HTML" x="-25vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="C#" x="20vw" y="6vw" />
            <Skill name="Javascript" x="0vw" y="12vw" />
            <Skill name="Unity" x="-20vw" y="-15vw" />
            <Skill name="NodeJs" x="15vw" y="-12vw" />
            <Skill name="NextJs" x="30vw" y="-5vw" />
            <Skill name="Firebase" x="0vw" y="-20vw" />
            <Skill name="Tailwind" x="-25vw" y="18vw" />
            <Skill name="Blockchain" x="18vw" y="18vw" />
            <Skill name="React" x="-38vw" y="-5vw" />
            <Skill name="Figma" x="38vw" y="8vw" />
        </div>
    </div>
)

}

export default Skills