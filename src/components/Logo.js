import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import vp from '../../public/images/logo/VP.png'
import { LogoDarkIcon, LogoLightIcon, LogoDarkRoxoIcon, LogoDarkBrancoIcon } from './Icons'

const MotionLink = motion(Link)

const Logo = () => {
  // return (
  //   <div className=' flex items-center justify-center mt-2'>
  //       <MotionLink href='/' className=' w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
  //       whileHover={{
  //         backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
  //         transition: {duration:1, repeat: Infinity}
  //       }}>
  //           VP
  //       </MotionLink>
  //   </div>
  // )

  // return (
  //   <div className='mt-2'>
  //       <MotionLink href='/' className='text-4xl font-bold'>
  //           VP
  //       </MotionLink>
  //   </div>
  // )

  return (
    <div className='mt-0 md:mt-2'>
        <MotionLink href='/'>
          <LogoDarkRoxoIcon className=' !w-10 md:!w-16' />
        </MotionLink>
    </div>
  )
}

export default Logo