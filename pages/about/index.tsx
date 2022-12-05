import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Head from 'next/head';
import type { NextPageWithLayout } from '../_app';

/* Ui Components */
import { Picture, Paragraph, Heading, Divider } from '../../components/ui';

/* Page Components */
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import AboutSite from '../../components/Site';
import Line from '../../components/Timeline';

/* Framer Motion */
import { motion, AnimatePresence } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Prisma ORM */
import prisma from '../../prisma';
export const getServerSideProps = async () => {
  const timeline = await prisma.timeline.findMany({});

  return { props: { timeline } };
};

const emojis = ['😎', '🤖', '👏', '👨‍💻', '💻', '📦', '📌', '🤩', '🤓', '🦄', '🚀', '🎉'].sort(
  (a, b) => 0.5 - Math.random()
);

const Page: NextPageWithLayout = ({ timeline }: any) => {
  return (
    <>
      <Head>
        <title>About | Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="space-y-14">
        <div className="space-y-6">
          <Heading variant="h1" className="gradient" id="#">
            About Gabriel.
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
            title="Hi, nice to see you! :)"
          />

          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </Paragraph>
        </div>

        {/* Projects list */}
        <AnimatePresence>
          {timeline && (
            <motion.div
              id="projects"
              initial={animation.initial}
              animate={animation.animate}
              transition={animation.transition}
            >
              <div className="relative">
                {timeline.map((element: any, index: number) => (
                  <Line
                    key={index}
                    title={element?.title}
                    date={element?.year}
                    text={element?.text}
                    badge={element.id == 1}
                    emoji={emojis[index]}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Divider />
        <AboutSite />
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Container>{page}</Container>
    </Layout>
  );
};

export default Page;
