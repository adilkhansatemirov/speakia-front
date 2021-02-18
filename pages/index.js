import Header from 'components/Header/Header';
import ProgramOfEducation from 'components/ProgramOfEducation/ProgramOfEducation';
import Head from 'next/head';

function Landing() {
  return (
    <div>
      <Head>
        <title>Speakia.kz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProgramOfEducation />
    </div>
  );
}

export default Landing;
