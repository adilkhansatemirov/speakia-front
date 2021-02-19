import Head from 'next/head';
import Header from 'components/Header/Header';
import ProgramOfEducation from 'components/ProgramOfEducation/ProgramOfEducation';
import SectionDividerLine from 'components/Shared/SectionDividerLine';
import Nav from 'components/Nav';
import OurTeam from 'components/OurTeam/OurTeam';
import AntiCrisis from 'components/AntiCrisis/AntiCrisis';
import Reviews from 'components/Reviews/Reviews';
import Footer from 'components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

function Landing() {
  return (
    <div>
      <Head>
        <title>Speakia.kz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SectionDividerLine />
      <Header toast={toast} />
      <ProgramOfEducation />
      <SectionDividerLine />
      <OurTeam />
      <SectionDividerLine />
      <AntiCrisis toast={toast} />
      <Reviews />
      <SectionDividerLine />
      <Footer />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default Landing;
