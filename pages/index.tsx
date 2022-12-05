import React from 'react';
import type { ReactElement } from 'react';

/* Next */
import Link from 'next/link';
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

/* Ui Components */
import { Divider, Paragraph, Heading } from '../components/ui';

/* Page Components */
import Layout from '../components/Layout';
import Container from '../components/Container';
import Newsletter from '../components/Newsletter';

/* Framer Motion */
import { motion, AnimatePresence } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Prisma ORM */
import prisma from '../prisma';
export const getServerSideProps = async () => {
  const projects = await prisma.projects.findMany();
  return { props: { projects } };
};

const Page: NextPageWithLayout = ({ projects }: any) => {
  return (
    <>
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
        <div className="space-y-2">
          <Heading variant="h1" className="gradient" id="#">
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

        {/* Newsletter component */}
        <Newsletter />

        {/* Projects list */}
        <AnimatePresence>
          {projects && (
            <motion.div
              id="projects"
              initial={animation.initial}
              animate={animation.animate}
              transition={animation.transition}
            >
              <Heading variant="h4" className="mb-4 text-base text-primary font-sans font-semibold">
                Featured Projects
              </Heading>

              <div className="flex flex-col space-y-3">
                {projects.map((element: any, index: number) => (
                  <Link key={index} href={element?.link} passHref={true}>
                    <a className="flex items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
                      <strong className="flex-none font-medium text-gray">{element?.name}</strong>
                      <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
                      <p className="flex-none font-sans text-gray font-regular text-opacity-60">{element?.role}</p>
                      <span className="flex-none font-serif">{element?.date}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Divider />

        {/* Social list */}
        <motion.div
          id="social"
          initial={animation.initial}
          animate={animation.animate}
          transition={animation.transition}
        >
          <Heading variant="h4" className="mb-4 text-base text-primary font-sans font-semibold">
            Elsewhere
          </Heading>

          <div className="flex mt-4 flex-col space-y-2">
            <Link href="/s/github" passHref>
              <span className="flex cursor-pointer items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
                <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
                  Github
                </strong>
                <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
                <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
                  Folow
                </span>
              </span>
            </Link>
            <Link href="/s/twitter" passHref>
              <span className="flex cursor-pointer items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
                <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
                  Twitter
                </strong>
                <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
                <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
                  Folow
                </span>
              </span>
            </Link>
            <Link href="/s/linkedin" passHref>
              <span className="flex cursor-pointer items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
                <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
                  Linkedin
                </strong>
                <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
                <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
                  Folow
                </span>
              </span>
            </Link>
          </div>
        </motion.div>
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
