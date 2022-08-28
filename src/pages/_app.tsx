import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head';
import { MDXProvider, GoogleAnalytics } from '../components';
import { reportWebVitals } from '../utils';

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
      <GoogleAnalytics
        googleAnalyticsId={process.env.GOOGLE_ANALYTICS_ID}
      />
    </>
  );
}

export { reportWebVitals };

export default MyApp
