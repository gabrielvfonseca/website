import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

/* Ui Components */
import { HomeIcon } from '@iconicicons/react';
import { Paragraph, Heading, Button } from '../components/ui';

/* Page Components */
import Layout from '../components/Layout';
import Container from '../components/Container';

/* Framer Motion */
import { motion } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay: 1 },
};

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>404 | Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="p-8">
        <div className="space-y-8">
          <Heading variant="h1" className="gradient font-serif" id="#">
            Lost your way?
          </Heading>
          <Paragraph className="font-serif font-normal text-m">
            Obi-Wan: This is not the page you are looking for.
          </Paragraph>
          <Link href="/" passHref>
            <Button variant="secondary">
              Return
              <HomeIcon width={22} height={22} className="ml-1" />
            </Button>
          </Link>
          <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
            <Image
              src="/static/images/obi-wan.gif"
              alt="ObiWan"
              quality={100}
              height={218}
              width={480}
              title="You're not gonna find what you're looking for..."
              className="rounded-ts"
            />
          </motion.div>
        </div>
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
