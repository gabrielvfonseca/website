import React from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';

import type { NextPageWithLayout } from '../_app';
import { Layout, Picture, Paragraph, Heading, Divider } from '../../components/index';
import { AboutSite, Timeline } from '../../components/index';

const Page: NextPageWithLayout = () => {
  return (
    <div>
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
        <div id="#" className="space-y-4">
          <Heading variant="h1" className="gradient">
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
        <Timeline />
        <Divider />
        <AboutSite />
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
