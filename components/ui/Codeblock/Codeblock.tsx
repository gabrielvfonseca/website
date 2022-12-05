import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const animated = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: { duration: 0.4 },
};

const Codeblock: React.FC<Props> = ({ children }: Props) => {
  return (
    <motion.div
      className="p-5 bg-frogra-black text-ts font-semibold font-sans text-center text-whiter text-opacity-70 rounded-th border-0.8 border-solid border-charleston hover:bg-opacity-75 hover:border-gray hover:border-opacity-20"
      initial={animated.initial}
      animate={animated.animate}
      transition={animated.transition}
    >
      {children}
    </motion.div>
  );
};

export default Codeblock;
