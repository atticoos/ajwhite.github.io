import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "../components";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,600|Open+Sans:400,300,700,600&display=optional" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
