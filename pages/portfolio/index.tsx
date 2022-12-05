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

const Page: NextPageWithLayout = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Portfolio | Gabriel Fonseca</title>
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

        <div id="works" className="space-y-6">
          <Heading variant="h3" className="text-primary font-sans font-semibold">
            Previous works
          </Heading>
          <div className="space-y-6">
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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
            <Link href="/static/docs/cv_gabriel.pdf">
              <Button variant="outline">Download CV</Button>
            </Link>
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
