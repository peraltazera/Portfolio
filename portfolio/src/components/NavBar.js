import { useState } from 'react';
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'

const NavBar = () => {

  const [menuMobile, setMenuMobile] = useState(true);

  const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
  
    return (
      <Link onClick={() => setMenuMobile(!menuMobile)} href={href} className={`${className} relative group ${router.asPath === href ? "font-semibold" : ""} ${router.asPath === href ? "text-primary" : "text-light"}`}>
        {title}
        <span className={` h-[1px] inline-block bg-primary absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}`}>
        </span>
      </Link>
    )
  }

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

    <header className=' w-full px-8 sm:px-16 md:px-32 py-8 font-medium flex items-center justify-between'>
      <Logo />
      <div className=' block md:hidden'>
        <button className=' text-light' onClick={() => setMenuMobile(!menuMobile)}>
          Menu
        </button>
      </div>
      {
        menuMobile
        &&
        <div className=' left-0 w-full top-20 absolute bg-dark z-10 px-8 py-8 text-center block md:hidden drop-shadow-xl'>
          <nav className=' flex flex-col text-dark w-fit m-auto gap-4'>
            <CustomLink set href='/' title="Inicio" className=' z-10' />
            <CustomLink href='/about' title="Sobre" className=' z-10' />
            <CustomLink href='/projects' title="Projetos" className=' z-10' />
            <CustomLink href='mailto:Victorgamedeveloper@gmail.com' title="Contato" className='z-10' />
          </nav>
          <nav className=' flex items-center justify-center flex-wrap gap-2 mt-8'>
            <motion.a href='https://github.com/peraltazera' target={"_blank"} className=' w-6 mx-3 z-10'
              whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
              <GithubIcon />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/victorpereiradeveloper/' target={"_blank"} className=' w-6 mr-3 z-10'
              whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
              <LinkedInIcon />
            </motion.a>
          </nav>
        </div>
      }
      <nav className='absolute left-[50%] -translate-x-[50%] hidden md:block'>
        <CustomLink href='/' title="Inicio" className=' mr-4' />
        <CustomLink href='/about' title="Sobre" className=' mx-4' />
        <CustomLink href='/projects' title="Projetos" className=' mx-4' />
        <CustomLink href='mailto:Victorgamedeveloper@gmail.com' title="Contato" className=' ml-4' />
      </nav>
      <nav className=' items-center justify-center flex-wrap gap-2 hidden md:flex'>
        <motion.a href='https://github.com/peraltazera' target={"_blank"} className=' w-6 mx-3'
          whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
          <GithubIcon />
        </motion.a>
        <motion.a href='https://www.linkedin.com/in/victorpereiradeveloper/' target={"_blank"} className=' w-6 mr-3'
          whileHover={{ y:-2 }} whileTap={{ scale:0.9 }}>
          <LinkedInIcon />
        </motion.a>
      </nav>
    </header>
  )
}

export default NavBar
