import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CloseIcon } from '@iconicicons/react';

interface Props {
  children: React.ReactNode;
  visible?: boolean;
}

export const Motion = {
  initial: {
    y: 150,
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

const Toast: React.FC<Props> = ({ children, visible }) => {
  const [isVisible, setVisibility] = useState(visible || false);

  return (
    <motion.div className="bg-transparent fixed bottom-4 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div layout initial={Motion.initial} animate={Motion.animate} exit={Motion.exit}>
            <div className="flex w-fit z-40 py-2 rounded-base bg-frogra-black border-0.8 border-solid border-charleston">
              <span
                onClick={() => setVisibility(!isVisible)}
                className="absolute cursor-pointer top-2 right-2 text-whiter fill-whiter opacity-60 hover:fill-primary hover:text-primary transition ease-in-out delay-75 duration-250"
              >
                <CloseIcon width={20} height={20} />
              </span>
              <div>{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Toast;
