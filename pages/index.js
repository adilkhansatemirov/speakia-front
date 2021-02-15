import Header from 'components/Header/Header';
import Head from 'next/head';

function Landing() {
  return (
    <div>
      <Head>
        <title>Speakia.kz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

export default Landing;
