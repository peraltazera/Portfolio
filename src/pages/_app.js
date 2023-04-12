import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="Icon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-dark w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
