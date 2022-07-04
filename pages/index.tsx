import type { NextPage } from 'next'
import Head from 'next/head'
import Tailwind from './tailwind-practice'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Practice with Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tailwind />
      
    </div>
  )
}

export default Home
