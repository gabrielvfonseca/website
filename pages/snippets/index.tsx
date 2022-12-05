import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Head from 'next/head';
import type { NextPageWithLayout } from '../_app';

/* Framer Motion */
import { motion } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Ui Components */
import { GridIcon } from '@iconicicons/react';
import { Heading, Divider, Paragraph } from '../../components/ui';

/* Page Components */
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import GridPost from '../../components/GridPost';

/* Markdown */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const files = fs.readdirSync('data/snippets');
  const snippets = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(`data/snippets/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug: fileName.replace('.mdx', ''),
      frontmatter,
    };
  });

  return {
    props: {
      snippets,
    },
  };
}

const Page: NextPageWithLayout = ({ snippets }: any) => {
  return (
    <>
      <Head>
        <title>Snippets | Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          duration: 4,
          stiffness: 100,
        }}
        className="space-y-10"
      >
        <div className="space-y-2">
          <Heading variant="h1" className="gradient" id="#">
            Code Snippets
          </Heading>
          <Paragraph>
            I'm a software engineer, product designer and bioinformatician. I'm particularly interested in the ways
            technology can enhance intuition and creativity.
          </Paragraph>
        </div>

        <Divider />

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
        >
          {snippets.map((post: any, index: number) => {
            const { slug, frontmatter } = post;
            const { title, image, description } = frontmatter;

            return (
              <GridPost key={index} href={`/snippets/${slug}`} image={image} text={description}>
                {title}
              </GridPost>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout head={{ heading: 'Snippets', icon: <GridIcon width={20} height={20} /> }}>
      <Container>{page}</Container>
    </Layout>
  );
};

export default Page;
