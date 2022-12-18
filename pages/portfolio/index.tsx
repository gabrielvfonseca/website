import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Link from 'next/link';
import Head from 'next/head';
import type { NextPageWithLayout } from '../_app';

/* Ui Components */
import { ArchiveIcon } from '@iconicicons/react';
import { Heading, Divider, Paragraph, Picture, Button } from '../../components/ui';

/* Page Components */
import Layout from '../../components/Layout';
import Container from '../../components/Container';

/* Framer Motion */
import { motion } from 'framer-motion';
const animate = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.2 },
  viewport: { once: true },
};

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Portfolio — Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="space-y-10">
        <Heading variant="h1" className="gradient" id="#">
          My Work.
        </Heading>

        <Divider />

        <div id="works" className="space-y-10">
          <Heading variant="h4" className="text-primary font-sans font-semibold">
            Previous works
          </Heading>

          <div className="space-y-20">
            <motion.div
              id="teenupdate"
              initial={animate.initial}
              whileInView={animate.whileInView}
              transition={animate.transition}
              viewport={animate.viewport}
              className="space-y-5"
            >
              <Heading variant="h5">teenupdate (2018 - 2022)</Heading>
              <Paragraph>
                I founded teenupdate in 2018 with my co-founder Miguel to build a unique tech magazine/blog targeted to
                young people like us.
              </Paragraph>
              <Paragraph>
                Clew was acquired by Dropbox in 2022. Clew is where work came together—work sprawled across disparate
                tools, work lost in chat threads and emails, work floating around with no context or home. Clew is the
                traditional knowledge management tool, wiki, and what have you, reimagined. It's a better way to
                organize work for the individual and the team. For any thought or project, Clew captures the context,
                surfaces what's needed, and preserves what's important.
              </Paragraph>

              <Picture
                src="static/images/demo.png"
                alt="Gabriel"
                width={768}
                height={550}
                quality={100}
                title="Hi, nice to see you! :)"
              />

              <Picture
                src="static/images/demo.png"
                alt="Gabriel"
                width={768}
                height={550}
                quality={100}
                title="Hi, nice to see you! :)"
              />

              <Paragraph>
                Clew was acquired by Dropbox in 2022. Clew is where work came together—work sprawled across disparate
                tools, work lost in chat threads and emails, work floating around with no context or home. Clew is the
                traditional knowledge management tool, wiki, and what have you, reimagined.
              </Paragraph>
            </motion.div>

            <motion.div
              id="aurora"
              initial={animate.initial}
              whileInView={animate.whileInView}
              transition={animate.transition}
              viewport={animate.viewport}
              className="space-y-5"
            >
              <Heading variant="h5">aurora.ai (2022)</Heading>
              <Paragraph>
                I'm founding aurora. An artificial inteligence api with NLP capabilities powered by google's BERT model
                architecture and Rust.
              </Paragraph>

              <Picture
                src="static/images/demo.png"
                alt="Gabriel"
                width={768}
                height={550}
                quality={100}
                title="Hi, nice to see you! :)"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout head={{ heading: 'Portfolio', icon: <ArchiveIcon width={20} height={20} /> }}>
      <Container>{page}</Container>
    </Layout>
  );
};

export default Page;
