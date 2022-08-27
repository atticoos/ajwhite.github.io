import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { GoogleAnalytics } from '../components';

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600|Open+Sans:400,300,700,600" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <GoogleAnalytics googleAnalyticsId={pageProps?.headerData?.googleAnalyticsId} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
