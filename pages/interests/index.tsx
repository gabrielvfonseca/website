import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Head from 'next/head';
import type { NextPageWithLayout } from '../_app';

/* Ui Components */
import { PinTackIcon } from '@iconicicons/react';
import { Heading, Divider, Paragraph, Picture } from '../../components/ui';

/* Page Components */
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import TopTracks from '../../components/TopTracks';
import Navigation from '../../components/Navigation';

/* Framer Motion */
import { motion } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/external/spotify/tracks`);
  const data = await res.json();

  return { props: { data } };
}

const Page: NextPageWithLayout = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Interests | Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="space-y-20">
        <div className="space-y-8">
          <Heading variant="h1" className="gradient" id="#">
            Things I'm interested in.
          </Heading>

          <motion.nav className="flex justify-start w-full border-0.8 border-solid border-charleston py-1 px-2 rounded-base">
            {['Programming', 'Entrepreneurship', 'AI and robotics', 'Music'].map((element: any, index: number) => (
              <Navigation key={index} url={element.toLowerCase().replace(' ', '-')} label={element} />
            ))}
          </motion.nav>

          <Divider />
        </div>
        <div className="space-y-6">
          <Heading id="programming" variant="h3">
            Entrepreneurship & Creating Products
          </Heading>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Paragraph>

          <Picture
            src="static/images/demo.png"
            alt="Gabriel"
            width={768}
            height={550}
            quality={100}
            label="A template photo"
            title="Hi, nice to see you! :)"
          />

          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Paragraph>
        </div>

        <Divider />

        <motion.div
          className="space-y-3"
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
        >
          <Heading id="music" variant="h3">
            Music
          </Heading>
          <Paragraph>Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.</Paragraph>
          <TopTracks tracks={data} />
        </motion.div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout head={{ heading: 'Interests', icon: <PinTackIcon width={20} height={20} /> }}>
      <Container>{page}</Container>
    </Layout>
  );
};

export default Page;
