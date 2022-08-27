import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600|Open+Sans:400,300,700,600" rel="stylesheet" type="text/css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
