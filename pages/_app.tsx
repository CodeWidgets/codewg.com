import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>CodeWidgets</title>
        <meta name="description" content="Useful widgets for coders." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
