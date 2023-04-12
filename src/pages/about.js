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
          <div className='  px-8 sm:px-24 md:px-32 xl:px-48 2xl:px-64 md:mt-16'>
            <AnimatedText text="Me conhaça mais!" className='mb-14' />
              <p className=' font-medium text-base text-light'>
              Sou um desenvolvedor apaixonado por tecnologia, com experiência em várias linguagens de programação, incluindo JavaScript e C#. Com 
              foco principal em desenvolvimento web e de jogos, desenvolvi aplicativos e jogos usando tecnologias como Phaser, React e Unity.
              </p>
              <br />
              <p className=' font-medium text-base text-light'>
              Gerenciei projetos e trabalhei em equipe para entregar soluções que atendem aos objetivos do cliente e proporcionam experiências envolventes e 
              divertidas aos usuários. Sou altamente motivado e dedicado, sempre buscando aprender novas habilidades e aprimorar minha capacidade de resolver problemas.
                </p>
                <br />
                <p className=' font-medium text-base text-light'>
                Trabalho bem em equipe e garanto que as entregas sejam de alta qualidade e dentro do prazo. Estou sempre explorando novas tecnologias e aprimorando
                 minhas habilidades para me manter atualizado em um mundo em constante evolução.
                </p>
              {/* <p className=' font-medium text-base text-light'>
                Sou formado em Jogos Digitais pelo IESB e sou um desenvolvedor multidisciplinar, com conhecimento em Desenvolvimento Front-End, Desenvolvimento de Jogos 
                para Desktop, Mobile e Web, bem como UX/UI Design.
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
              </p> */}
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