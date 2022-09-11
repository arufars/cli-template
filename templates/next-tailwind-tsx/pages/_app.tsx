import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'src/layouts/Layout';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  const gradient = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);'
  return (
    <Layout>
      <NextNProgress color={gradient} height={3}/>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
