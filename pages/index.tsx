import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import SectionHero from '../components/section-hero/section-hero';
import SectionProduct from '../components/section-product/section-product';
import Footer from '../components/footer/footer';

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
    <SectionProduct/>    
     </main>
     <Footer/>
     
    </>
  );
};

export default Home;
