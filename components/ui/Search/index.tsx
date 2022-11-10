import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Picture, Hyperlink, Heading } from '../../index';
import { CloseIcon } from '@iconicicons/react';

import useKeyPress from '../../../utils/functions/keyPress';

export const Animation = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Search = () => {
  const [isVisible, setVisibility] = useState(true);

  // Use keyboard shotcut 'q' to open search
  useKeyPress(['q'], (e: any) => setVisibility(!isVisible));

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div className="bg-transparent items-center text-center fixed top-2/4 right-2/4 z-50">
          <motion.div layout initial={Animation.initial} animate={Animation.animate} exit={Animation.exit}>
            <div className="flex py-9 px-9 rounded-base w-fit h-fit bg-frogra-black border-0.8 border-solid border-charleston">
              <span
                onClick={() => setVisibility(false)}
                className="absolute cursor-pointer top-2 right-2 text-whiter fill-whiter opacity-60 hover:fill-primary hover:text-primary transition ease-in-out delay-75 duration-250"
              >
                <CloseIcon width={20} height={20} />
              </span>
              <div>
                <Heading variant="h3">Hello</Heading>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Search;
