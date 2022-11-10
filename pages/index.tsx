import React from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';

import type { NextPageWithLayout } from './_app';
import { Layout, Divider, Paragraph, Heading } from '../components/index';
import { Newsletter, PostList, ProjectList, SocialList } from '../components/index';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="space-y-10">
        <div>
          <div id="#" className="space-y-2">
            <Heading variant="h1" className="gradient">
              Hi, I'm Gabriel. I design & create software.
            </Heading>
            <h2 className="font-sans text-lg font-semibold">
              Software developer • CS student • Web development & AI enthusiast
            </h2>
            <Paragraph>
              I'm a software engineer, product designer and bioinformatician. I'm particularly interested in the ways
              technology can enhance intuition and creativity.
            </Paragraph>
          </div>
          <Newsletter />
        </div>

        <div className="space-y-10">
          <PostList />
          <ProjectList />

          <Divider />

          <SocialList />
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
