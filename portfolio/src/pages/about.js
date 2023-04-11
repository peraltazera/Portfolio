import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import AnimatedText from '@/components/AnimatedText'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
  return (
    <>
      <Head>
        <title>Victor Pereira | Sobre</title>
        <meta name="description" content="Portfolio Victor Pereira" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className=' pt-8'>
          <div className='  px-8 sm:px-24 md:px-32 md:mt-16'>
            <AnimatedText text="Paixão alimenta propósito!" className='mb-14' />
              <p className=' font-medium text-base text-light'>
                Sou formado em Jogos Digitais pelo IESB e sou um desenvolvedor multidisciplinar, com conhecimento em Desenvolvimento Front-End, Desenvolvimento de Jogos 
                para Desktop, Mobile e Web, bem como em UX/UI Design.
              </p>
              <br />
              <p className=' font-medium text-base text-light'>
                Tenho experiência em tecnologias como JavaScript, TypeScript, C#, ReactJS, NextJS, NodeJS, Unity, Figma, Scrum e UX/UI Design. Minha paixão por design e 
                tecnologia se reflete em meus projetos, buscando sempre aprimorar a experiência do usuário.
              </p>
              <br />
              <p className=' font-medium text-base text-light'>
                Convido você a conhecer mais sobre meu trabalho através do meu portfólio e do GitHub, onde você pode ver alguns dos meus projetos mais recentes e avaliar 
                minhas habilidades técnicas e criativas. Estou sempre em busca de novos desafios e oportunidades para continuar crescendo profissionalmente e oferecendo 
                soluções ainda melhores para meus clientes.
              </p>
          </div>
          <Skills/>
          <Experience/>
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about