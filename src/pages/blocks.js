import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Blocks from 'pageComponents/Blocks';
import GlobalStyle from '../globalStyles';

export default function Home() {
  return (
    <div className="container flex flex-col root home-page">
      <Head>
        <title>blockbase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />

      <main className="flex flex-grow flex-col blockbase-app px-4">
        <Navbar />

        <Blocks />
      </main>

      <Footer />
    </div>
  );
};
