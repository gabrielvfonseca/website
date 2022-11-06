import Head from 'next/head';
import Link from 'next/link';

import { Newsletter } from '../components/index';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div id="#" className="space-y-2">
        <h1 className="gradient text-3xl font-sans leading-snug max-w-lg font-bold">
          Hi, I'm Gabriel. I design & create software.
        </h1>
        <h2 className="font-sans text-lg font-semibold">Software developer</h2>
        <p className="text-gray">
          I'm a software engineer, product designer and bioinformatician. I'm particularly interested in the ways
          technology can enhance intuition and creativity.
        </p>
      </div>

      <Newsletter />

      <div id="#blog">
        <h5 className="mb-4 text-base text-primary font-sans font-semibold">From the blog</h5>
      </div>

      <div id="#projects">
        <h5 className="mb-4 text-base text-primary font-sans font-semibold">Featured projects</h5>
      </div>
    </div>
  );
}
