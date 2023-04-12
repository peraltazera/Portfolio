import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LIIcon from './LIIcon'

const Details = ({type, time, place, info}) => {

  const ref = useRef(null)

  return (
    <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LIIcon reference={ref} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} className=' flex flex-col gap-2'>
        <h3 className=' capitalize font-bold text-2xl text-light'>{type}</h3>
        <span className=' capitalize font-medium text-light/60'>
          {time} | {place}
        </span>
        <p className=' font-medium w-full text-light'>
          {info}
        </p>
      </motion.div>
    </li>
  )
}

const Education = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center center"]
    }
  )

  return (
    <div className=' my-32 md:my-64 sm:px-24 md:px-32'>
      <h2 className=' font-bold text-4xl md:text-6xl lg:text-8xl mb-16 md:mb-32 w-full text-center text-light'>Educação</h2>

      <div ref={ref} className=' w-full lg:w-[80%] mx-auto relative'>

      <motion.div style={{scaleY: scrollYProgress}} className=' absolute left-9 top-1 w-[4px] h-full bg-primary origin-top' />

        <ul className=' w-full flex flex-col items-start justify-between'>
          <Details 
            type="Curso Superior de Tecnologia (CST), Jogos Digitais"
            time="jan de 2016 - jun de 2018"
            place="Centro Universitário IESB"
            info="O curso de Jogos Digitais me preparou para a indústria de jogos e tecnologia, combinando habilidades técnicas e criativas. 
            Aprendi a criar jogos desde o conceito até a implementação final, desenvolvendo habilidades essenciais em design, narrativa, arte 
            e programação. Estou preparado para contribuir em equipes de desenvolvimento de jogos e crescer em um setor inovador e criativo."
          />
        </ul>
      </div>
    </div>
  )
}

export default Education