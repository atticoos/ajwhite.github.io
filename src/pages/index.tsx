import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../page-master';

export const getStaticProps = async () => ({
  props: {
    example: 'this is where we can load data'
  }
})

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Atticus White</title>
        <meta name="description" content="Atticus White - Software Engineer at Robin Powered, Inc." />
      </Head>
      <Home />
    </div>
  )
}

export default HomePage
