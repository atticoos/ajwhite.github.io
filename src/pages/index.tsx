import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from '../page-master';
import { withGlobalStaticProps } from '../enhancers';

export const getStaticProps = withGlobalStaticProps(async (_, globalProps) => ({
  props: {
    ...globalProps.props,
    example: 'this is where we can load data'
  }
}))

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Atticus White</title>
        <meta name="description" content="Atticus White - Software Engineer at Robin Powered, Inc." />
      </Head>
      <Home />
    </>
  )
}

export default HomePage
