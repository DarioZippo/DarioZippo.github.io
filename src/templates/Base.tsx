import Head from 'next/head';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
// import { Banner } from './Banner';
import { Footer } from './Footer';
import { GTag } from './GTag';
import { Header } from './Header';
import { Hero } from './Hero';
import { Main } from './Main';

const Base = () => (
  <div className="antialiased text-gray-200">
    <Head>
      <meta name="google-site-verification" content="l5mS_nhguNiPZkEKPiFXa-M64gWELSP1puyht0kTe2Q" />
    </Head>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <GTag />
    <Header />
    <Hero />
    <Main />
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
