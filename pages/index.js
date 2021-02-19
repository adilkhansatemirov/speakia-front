import Head from 'next/head';
import Header from 'components/Header/Header';
import ProgramOfEducation from 'components/ProgramOfEducation/ProgramOfEducation';
import SectionDividerLine from 'components/Shared/SectionDividerLine';
import Nav from 'components/Nav';
import OurTeam from 'components/OurTeam/OurTeam';
import AntiCrisis from 'components/AntiCrisis/AntiCrisis';
import Reviews from 'components/Reviews/Reviews';

function Landing() {
  return (
    <div>
      <Head>
        <title>Speakia.kz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SectionDividerLine />
      <Header />
      <ProgramOfEducation />
      <SectionDividerLine />
      <OurTeam />
      <SectionDividerLine />
      <AntiCrisis />
      <Reviews />
    </div>
  );
}

export default Landing;
