import React from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';

import type { NextPageWithLayout } from '../_app';
import { PinTackIcon } from '@iconicicons/react';
import { Layout, Hyperlink, Heading, Divider, Paragraph, Picture, TopTracks } from '../../components/index';

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/external/spotify/tracks`);
  const data = await res.json();

  return { props: { data } };
}

const List: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <li>
    <Hyperlink variant="underline" href={href}>
      {children}
    </Hyperlink>
  </li>
);

const Page: NextPageWithLayout = ({ data }: any) => {
  return (
    <div>
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
        <div id="#">
          <Heading variant="h1" className="gradient">
            Things I'm interested in.
          </Heading>

          <ul className="flex w-full justify-between mt-4 mb-12 opacity-80">
            <List href="#programming">Programming</List>
            <List href="#entrepreneurship">Entrepreneurship</List>
            <List href="#ai-robotics">AI and robotics</List>
            <List href="#music">Music</List>
          </ul>

          <Divider />
        </div>
        <div id="programming" className="space-y-6">
          <Heading variant="h3">Entrepreneurship & Creating Products</Heading>
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

        <div id="music" className="space-y-3">
          <Heading variant="h3">Music</Heading>
          <Paragraph>Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.</Paragraph>
          <TopTracks tracks={data} />
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout header={{ heading: 'Interests', icon: <PinTackIcon width={20} height={20} /> }}>{page}</Layout>;
};

export default Page;
