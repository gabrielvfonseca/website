import React, { useState } from 'react';

/* Components */
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Playing from '../Playing';

/* Classes */
import classNames from 'classnames';

/* Framer Motion */
import { motion, AnimatePresence } from 'framer-motion';
const Animation = {
  head: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.2 },
    exit: { opacity: 0, scale: 0.5 },
  },
};

/* Types */
interface Props {
  children: React.ReactNode;
  head?: {
    heading: string;
    subPage?: string;
    icon: any;
  };
  overflow?: boolean;
}

export default function Layout({ children, head }: Props) {
  const [isVisible, setVisibility] = useState(true);

  const handleScroll = (e: any) => {
    if (e.target.scrollTop < 40) setVisibility(true);
    else setVisibility(false);
  };

  return (
    <>
      <Playing />
      <main>
        <Sidebar />
        <motion.div className="w-full">
          {head ? (
            <>
              <AnimatePresence initial={false}>
                {isVisible && (
                  <motion.div
                    initial={Animation.head.initial}
                    animate={Animation.head.animate}
                    transition={Animation.head.transition}
                    exit={Animation.head.exit}
                    className="flex lg:w-4/5 fixed lg:top-5 z-40 pt-0 top-14 lg:right-5 ease-in"
                  >
                    <div className="hidden lg:inline w-full">
                      <div
                        className={classNames(
                          'flex w-full z-40 h-10 space-x-3 pl-3 py-2 bg-rich-dark-gray border-0.8 border-solid border-charleston border-opacity-30 rounded-t-lg',
                          'overflow-y-auto'
                        )}
                      >
                        {head?.subPage ? (
                          <>
                            <span className="text-whiter fill-whiter mt-1">{head?.icon}</span>
                            <p className="text-white text-m text-opacity-50">{head?.heading}</p>
                            <span className="text-gray font-semibold font-serif text-opacity-50">/</span>
                            <p className="text-white text-m text-opacity-50">{head?.subPage}</p>
                          </>
                        ) : (
                          <>
                            <span className="text-whiter fill-whiter mt-1">{head?.icon}</span>
                            <p className="text-white text-m text-opacity-50">{head?.heading}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                onScroll={handleScroll}
                className="h-full lg:w-4/5 lg:z-20 lg:p-8 px-8 pt-0 fixed bottom-0 lg:top-5 top-14 lg:right-5 lg:box-border lg:border-0.8 lg:border-solid lg:border-charleston lg:border-opacity-30 lg:rounded-t-lg overflow-scroll"
              >
                <motion.div className="static lg:mt-20 mt-8 lg:mx-20 mx-4 max-w-3xl mb-32">
                  {children}
                  <Footer />
                </motion.div>
              </div>
            </>
          ) : (
            <div className="h-full lg:w-4/5 lg:z-30 lg:p-8 px-2 pt-0 fixed bottom-0 lg:top-5 top-14 lg:right-5 right-0 lg:box-border lg:border-0.8 lg:border-solid lg:border-charleston lg:border-opacity-30 lg:rounded-t-lg overflow-scroll">
              <motion.div className="static lg:mt-8 mt-8 lg:mx-20 mx-8 max-w-3xl mb-32">
                {children}
                <Footer />
              </motion.div>
            </div>
          )}
        </motion.div>
      </main>
    </>
  );
}
