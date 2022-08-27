import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { GoogleAnalytics } from '../components';

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics
        googleAnalyticsId={process.env.GOOGLE_ANALYTICS_ID}
      />
    </>
  );
}

export default MyApp
