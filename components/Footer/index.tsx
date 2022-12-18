import React from 'react';

/* Components */
import { Divider, Hyperlink } from '../ui/index';

/* Framer Motion */
import { motion } from 'framer-motion';

const Footer = () => {
  const style = 'text-gray text-opacity-20 font-sans text-tss font-normal';

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <Divider />
      <div className="w-full mt-12 space-y-2">
        <p className={style}>&copy; 2022 Gabriel Fonseca. All Rights Reserved.</p>
        <p className={style}>
          This website is built using
          <Hyperlink href="/about/#site" className={style}>
            {' Next.js'}
          </Hyperlink>
          . Thanks for visting!
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
