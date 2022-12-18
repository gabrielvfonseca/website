import React from 'react';
import { motion } from 'framer-motion';

/* Ui Components */
import { ArrowRightIcon } from '@iconicicons/react';
import { Heading, Paragraph, Hyperlink } from '../ui';

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.li className="flex text-m group space-x-1 font-sans">
    <span className="pr-2 text-gray fill-gray opacity-50 hover:text-primary hover:fill-primary transition ease-in-out delay-75 duration-250">
      <ArrowRightIcon width={20} height={20} />
    </span>
    {children}
  </motion.li>
);

const AboutSite = () => (
  <div id="site" className="space-y-5">
    <div className="space-y-3">
      <Heading variant="h3">About this site</Heading>
      <Paragraph>In case you're wondering. This site was made with:</Paragraph>
    </div>
    <ul className="space-y-1">
      <List>
        Design and built with
        <Hyperlink target="_blank" variant="underline" href="https://www.adobe.com/products/xd.html">
          AdobeXD
        </Hyperlink>
        &nbsp;&
        <Hyperlink target="_blank" variant="underline" href="https://code.visualstudio.com/">
          Visual Studio Code
        </Hyperlink>
        .
      </List>
      <List>
        Created using
        <Hyperlink target="_blank" variant="underline" href="https://www.typescriptlang.org/">
          Typescript
        </Hyperlink>
        &nbsp;+
        <Hyperlink target="_blank" variant="underline" href="https://nextjs.org/">
          Next.js @13
        </Hyperlink>
        .
      </List>
      <List>
        Using a MySql database on
        <Hyperlink target="_blank" variant="underline" href="https://planetscale.com/">
          Planetscale
        </Hyperlink>
        .
      </List>
      <List>
        Styled using outstanding
        <Hyperlink target="_blank" variant="underline" href="https://tailwindcss.com/">
          Tailwindcss
        </Hyperlink>
        .
      </List>
      <List>
        Set with the
        <Hyperlink target="_blank" variant="underline" href="https://fonts.google.com/specimen/Inter">
          Inter
        </Hyperlink>
        &nbsp;&
        <Hyperlink target="_blank" variant="underline" href="https://fonts.google.com/specimen/Space+Grotesk">
          Space Grotesk
        </Hyperlink>
        &nbsp;fonts.
      </List>
    </ul>
  </div>
);

export default AboutSite;
