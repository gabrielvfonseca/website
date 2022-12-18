import React, { useState } from 'react';
import type { ReactElement } from 'react';

/* SWR */
import useSWR from 'swr';

/* Next */
import Head from 'next/head';
import Link from 'next/link';
import type { NextPageWithLayout } from '../_app';

/* Ui Components */
import { Picture, Paragraph, Heading, Divider, Button } from '../../components/ui';

/* Page Components */
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Site from '../../components/Site';
import Line from '../../components/Timeline';

/* Framer Motion */
import { motion, AnimatePresence } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Prisma ORM */
import prisma from '../../prisma';
export const getServerSideProps = async () => {
  const timeline = await prisma.timeline.findMany({});

  return { props: { timeline } };
};

const Page: NextPageWithLayout = ({ timeline }: any) => {
  const [emojis, setEmojis] = useState(
    ['😎', '🤖', '👏', '👨‍💻', '💻', '📦', '📌', '🤩', '🤓', '🦄', '🚀', '🎉'].sort((a, b) => 0.5 - Math.random())
  );

  return (
    <>
      <Head>
        <title>About — Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="space-y-14">
        <div className="space-y-6">
          <Heading variant="h1" className="gradient" id="#">
            About Gabriel.
          </Heading>

          <Paragraph>
            My name is João Gabriel Fonseca, finalist of Curso Técnico Profissional de Gestão e Programação de Sistemas
            Informáticos at Escola Secundária de São João do Estoril.
          </Paragraph>

          <Picture
            src="static/images/gabriel_01.jpg"
            alt="Gabriel"
            width={768}
            height={550}
            quality={100}
            title="Hi, nice to see you! :)"
          />

          <Paragraph>
            This year, I am also preparing myself to take the national exam of applied mathematics for access to higher
            education, with the aim of joining IST - Instituto Superior Técnico, in Computer Science Engineering.
          </Paragraph>
          <Paragraph>
            I consider myself an assertive person, responsible, very organized, hardworking, committed and self-taught,
            always looking for new challenges, and with the objective of keeping myself always up to date and
            competitive. In my spare time, I regularly attend the gym, listen to music and play the guitar.
          </Paragraph>
          <Paragraph>
            I held, for two consecutive times, the ISTROB-16 workshop at Instituto Superior Técnico, and this year, I
            won the Topas Lx programming tournament, promoted by Universidade Nova de Ciências e Tecnologias, for high
            school students.
          </Paragraph>

          <Link href="/static/docs/cv_gabriel.pdf">
            <Button variant="outline">Download CV</Button>
          </Link>
        </div>

        {/* Projects list */}
        <AnimatePresence>
          {timeline && (
            <motion.div
              id="projects"
              initial={animation.initial}
              animate={animation.animate}
              transition={animation.transition}
              className="pt-9"
            >
              <div className="relative">
                {timeline.map((element: any, index: number) => (
                  <Line
                    key={index}
                    title={element?.title}
                    date={element?.year}
                    text={element?.text}
                    badge={element.id == 1}
                    emoji={emojis[index]}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Divider />
        <Site />
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
