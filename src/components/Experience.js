import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LIIcon from './LIIcon'

const Details = ({position, company, companyLink, time, address, work}) => {

  const ref = useRef(null)

  return (
    <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LIIcon reference={ref} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} className=' flex flex-col gap-2'>
        <h3 className=' capitalize font-bold text-2xl text-light'>{position} - <span className=' text-primary capitalize'>{company}</span></h3>
        <span className=' capitalize font-medium text-light/60'>
          {time} | {address}
        </span>
        <p className=' font-medium w-full text-light'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className=' my-32 md:my-64 sm:px-24 md:px-32'>
       <h2 className=' font-bold text-4xl md:text-6xl lg:text-8xl mb-16 md:mb-32 w-full text-center text-light'>Experiencias</h2>

      <div ref={ref} className=' w-[100%] lg:w-[80%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} className=' absolute left-9 top-1 w-[4px] h-full bg-primary origin-top' />

        <ul className=' w-full flex flex-col items-start justify-between'>
        <Details 
            position="Desenvolvedor de aplicativos móveis"
            company="Blue Slime Studios"
            companyLink=""
            time="jun de 2019 - set de 2020 · 1 ano 4 meses"
            address="Brasília e Região · Remoto"
            work="Desenvolvimento de aplicativos educacionais que utilizam gamificação para otimizar a experiência do usuário e intensificar o 
            processo de aprendizagem. Entreguei diversos aplicativos educacionais impactantes que atenderam com sucesso aos objetivos educacionais dos clientes."
          />
         <Details 
            position="Desenvolvedor de jogos"
            company="GoEduca"
            companyLink=""
            time="ago de 2018 - fev de 2019 · 7 meses"
            address="Brasília e Região · Presencial"
            work="Desenvolvimento de jogos educativos inovadores utilizando a gamificação para aprimorar a experiência de aprendizado. Gerenciei projetos e 
            trabalhei em equipe para entregar jogos que atendiam com sucesso aos objetivos educacionais dos clientes e proporcionavam experiências envolventes e 
            divertidas aos usuários."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience