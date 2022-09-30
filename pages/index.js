import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Work from '../components/Work';
import OpenSource from '../components/OpenSource';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steve Dsouza</title>
        <meta name="description" content="Steve Dsouza Web Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <OpenSource />
      <Contact />
    </div>
  );
}
