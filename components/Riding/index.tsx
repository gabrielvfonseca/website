import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Picture, Paragraph, Heading, Button, ToastAnimation } from '../ui';
import { CloseIcon } from '@iconicicons/react';

import useKeyPress from '../../utils/functions/keyPress';

const Playing = () => {
  const [isVisible, setVisibility] = useState(true);

  // Use keyboard shotcut 'm' to open toast
  useKeyPress(['r'], (e: any) => setVisibility(!isVisible));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="bg-transparent fixed bottom-4 right-8 z-50">
          <motion.div
            layout
            initial={ToastAnimation.initial}
            animate={ToastAnimation.animate}
            exit={ToastAnimation.exit}
          >
            <div className="flex w-fit z-40 pb-2 rounded-base bg-frogra-black border-0.8 border-solid border-charleston">
              <span
                onClick={() => setVisibility(false)}
                className="absolute cursor-pointer top-2 right-2 text-whiter fill-whiter opacity-60 hover:fill-primary hover:text-primary transition ease-in-out delay-75 duration-250"
              >
                <CloseIcon width={20} height={20} />
              </span>
              <div>
                <Picture
                  src="static/images/niu-nqi.webp"
                  width={200}
                  height={190}
                  alt="niu"
                  quality={100}
                  className="opacity-75"
                />

                <div className="space-x-3 pl-4 pr-8">
                  <Heading variant="h6">Riding my bike</Heading>
                  <div className="flex space-x-1">
                    <Paragraph>Currently riding my bike</Paragraph>
                  </div>
                  <Button variant="outline" size="small">
                    More
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Playing;
