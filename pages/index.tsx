import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import SectionHero from '../components/section-hero/section-hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | [Blogr]</title>
      </Head>
     <Navbar/>
     <main>
     <SectionHero/>
     </main>
     
    </>
  );
};

export default Home;
