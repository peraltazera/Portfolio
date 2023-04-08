import React from 'react'
import Head from 'next/head'
import Layout from './Layout'
import AnimatedText from '@/components/AnimatedText'

const projects = () => {
  return (
    <>
      <Head>
        <title>Victor Pereira | Projetos</title>
        <meta name="description" content="Portfolio Victor Pereira" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className=' pt-16'>
          <AnimatedText text="Imaginação supera conhecimento!" className='mb-16' />
        </Layout>
      </main>
    </>
  )
}

export default projects