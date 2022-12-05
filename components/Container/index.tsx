import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string /* extra styling */;
}

const Container: React.FC<Props> = ({ children, id, className }: Props) => (
  <motion.div
    id={id}
    className={classNames(className)}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

export default Container;
