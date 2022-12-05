import React from 'react';

/* Next */
import Link from 'next/link';

/* Framer Motion*/
import { motion } from 'framer-motion';
const animated = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.2 },
  whileHover: {
    scale: 1.03,
    transition: { duration: 0.1 },
  },
  whileTap: { scale: 0.98 },
};

/* Ui Components */
import { Paragraph, Picture, Heading } from '../ui';

/* Types */
interface Props {
  children: React.ReactNode;
  text: string;
  href: string;
  image: string;
}

const gridPost = ({ children, text, image, href }: Props) => (
  <Link
    href={href}
    className="font-semibold text-white font-sans transition hover:text-primary ease-in-out delay-75 duration-200"
    passHref
  >
    <a>
      <motion.article
        initial={animated.initial}
        whileInView={animated.whileInView}
        viewport={animated.viewport}
        transition={animated.transition}
        whileHover={animated.whileHover}
        whileTap={animated.whileTap}
        className="block cursor-pointer w-full h-fit p-6 font-semibold text-white bg-frogra-black font-sans rounded-th border-0.8 border-solid border-charleston group opacity-90 transition ease-in-out delay-75 duration-200"
      >
        <div className="space-y-3">
          <Picture src={image} alt="snippet" width={32} height={32} quality={100} className="rounded-th" />
          <div className="block space-y-1">
            <Heading
              variant="h4"
              className="font-semibold text-white font-sans transition hover:text-primary ease-in-out delay-75 duration-200"
            >
              {children}
            </Heading>
            <Paragraph className="font-serif font-normal text-gray text-opacity-75 tracking-10">{text}</Paragraph>
          </div>
        </div>
      </motion.article>
    </a>
  </Link>
);

export default gridPost;
