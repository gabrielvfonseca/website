import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Sidebar, Playing, Search } from '../../index';

interface Props {
  children: React.ReactNode;
  header?: {
    heading: string;
    icon: any;
  };
}

export default function Layout({ children, header }: Props) {
  const [isVisible, setVisibility] = useState(true);

  const handleScroll = (e: any) => {
    if (e.target.scrollTop < 40) setVisibility(true);
    else setVisibility(false);
  };

  if (header) {
    return (
      <>
        <Search />
        <Playing />
        <main className="flex">
          <Sidebar />
          <div className="w-full">
            <AnimatePresence initial={false}>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.24 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex w-4/5 fixed top-5 right-5 ease-in"
                >
                  <div className="flex w-full z-40 h-10 pl-3 py-2 space-x-3 bg-rich-dark-gray border-0.8 border-solid border-charleston border-opacity-30 rounded-t-lg overflow-scroll">
                    <span className="text-whiter fill-whiter mt-1">{header.icon}</span>
                    <p className="text-white text-m text-opacity-50">{header.heading}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              onScroll={handleScroll}
              className="h-full w-4/5 p-8 fixed bottom-0 top-5 right-5 box-border border-0.8 border-solid border-charleston border-opacity-30 rounded-t-lg overflow-scroll"
            >
              <div className="static mt-20 mx-20 max-w-3xl mb-32">{children}</div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Search />
      <Playing />
      <main className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="h-full w-4/5 p-8 fixed bottom-0 top-5 right-5 box-border border-0.8 border-solid border-charleston border-opacity-30 rounded-t-lg overflow-scroll">
            <div className="static mt-10 mx-20 max-w-3xl mb-32">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
