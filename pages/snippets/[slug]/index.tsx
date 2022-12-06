import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Head from 'next/head';
import type { NextPageWithLayout } from '../../_app';

/* Ui Components */
import { GridIcon } from '@iconicicons/react';
import { Hyperlink, Heading, Divider, Paragraph, Picture } from '../../../components/ui';

/* Page Components */
import Layout from '../../../components/Layout';

/* Framer Motion */
import { motion } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Markdown */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const markdownComponents = {
  img: Picture,
  h1: Heading,
  h2: Heading,
  p: Paragraph,
  a: Hyperlink,
};

const Page: NextPageWithLayout = ({ frontMatter: { title, image, description, tags }, mdxSource }: any) => {
  return (
    <div>
      <Head>
        <title>{`${title} — Gabriel Fonseca`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content={tags} />
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
        className="space-y-14"
      >
        <div id="#" className="flex space-y-4 justify-between">
          <div className="space-y-3">
            <Heading variant="h1" className="gradient">
              {title}
            </Heading>
            <Paragraph>{description}</Paragraph>
          </div>
          <Picture src={image} width={45} height={45} alt="Image" quality={100} />
        </div>
        <Divider />
        <motion.div
          className="prose mx-auto"
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
        >
          <MDXRemote {...mdxSource} components={markdownComponents} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('data', 'snippets'));

  const paths = files.map((filename: string) => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(path.join('data/snippets/', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout head={{ heading: 'Snippets', icon: <GridIcon width={20} height={20} /> }}>{page}</Layout>;
};

export default Page;
