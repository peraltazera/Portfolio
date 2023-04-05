import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group ${router.asPath === href ? "font-semibold" : ""}`}>
      {title}
      <span className={` h-[1px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? "w-full" : "w-0"}`}>
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    // <header className=' w-full px-32 py-8 font-medium flex items-center justify-between'>
    //   <div className=' absolute left-[50%] top-2 -translate-x-[50%]'>
    //     <Logo />
    //   </div>
    //   <nav>
    //     <CustomLink href='/' title="Inicio" className=' mr-4' />
    //     <CustomLink href='/about' title="Sobre" className=' mx-4' />
    //     <CustomLink href='/projects' title="Projetos" className=' mx-4' />
    //     <CustomLink href='mailto:Victorgamedeveloper@gmail.com' title="Contato" className=' ml-4' />
    //   </nav>
    //   <nav className=' flex items-center justify-center flex-wrap'>
    //     <motion.a href='https://twitter.com/home' target={"_blank"} className=' w-6 mr-3'
    //       whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
    //       <LinkedInIcon />
    //     </motion.a>
    //     <motion.a href='https://twitter.com/home' target={"_blank"} className=' w-6 mx-3'
    //       whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
    //       <GithubIcon />
    //     </motion.a>
    //   </nav>
    // </header>

    <header className=' w-full px-32 py-8 font-medium flex items-center justify-between'>
      <Logo />
      <nav className='absolute left-[50%] -translate-x-[50%]'>
        <CustomLink href='/' title="Inicio" className=' mr-4' />
        <CustomLink href='/about' title="Sobre" className=' mx-4' />
        <CustomLink href='/projects' title="Projetos" className=' mx-4' />
        <CustomLink href='mailto:Victorgamedeveloper@gmail.com' title="Contato" className=' ml-4' />
      </nav>
      <nav className=' flex items-center justify-center flex-wrap'>
        <motion.a href='https://www.linkedin.com/in/victorpereiradeveloper/' target={"_blank"} className=' w-6 mr-3'
          whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
          <LinkedInIcon />
        </motion.a>
        <motion.a href='https://github.com/peraltazera' target={"_blank"} className=' w-6 mx-3'
          whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  )
}

export default NavBar
