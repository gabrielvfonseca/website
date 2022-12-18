// ./pages/newsletter.tsx

import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Head from 'next/head';
import type { NextPageWithLayout } from '../_app';

/* Ui Components */
import { Paragraph, Heading } from '../../components/ui';

/* Page Components */
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Newsletter from '../../components/Newsletter';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Newsletter — Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="space-y-10">
        <div className="space-y-6">
          <Heading variant="h1" className="gradient" id="#">
            Gabriel's Newsletter
          </Heading>

          <Paragraph>
            Sharing process, ideas and inspiration–from ten years of designing and building things. I hope to focus
            primarily on technology, meta learning, design and other things I find interesting.
          </Paragraph>
          <Paragraph>
            You can subscribe for free below, and as always you can unsubscribe at anytime by clicking the unsubscribe
            link on any of my emails.
          </Paragraph>
        </div>
        <Newsletter />
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
