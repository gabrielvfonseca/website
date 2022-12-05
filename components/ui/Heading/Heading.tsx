import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  id?: string | undefined;
  className?: string /* extra styling */;
  /* framer motion */
  animate?: {
    state: boolean;
    animation?: 'fadeInOut' | undefined;
    whileOnView?: boolean | undefined;
    duration?: number;
  };
}

export const animated = {
  fadeInOut: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: { duration: 0.4 },
  },
};

const variants = {
  h1: 'font-sans text-3xl leading-snug max-w-lg font-bold',
  h2: 'font-sans text-xl leading-tight max-w-lg font-semibold',
  h3: 'font-sans text-l leading-tight max-w-lg font-semibold',
  h4: 'font-sans text-m max-w-lg font-semibold',
  h5: 'font-sans text-base max-w-lg font-semibold',
  h6: 'font-sans text-s max-w-lg font-semibold',
};

const Heading: React.FC<Props> = ({ variant, children, id, className, animate }: Props) => {
  const variantClasses = variants[variant ? variant : 'h6'];

  const attributes = {
    initial: animate?.animation && animated.fadeInOut.initial,
    animate: animate?.animation && animated.fadeInOut.animate,
    transition: animate?.animation && animated.fadeInOut.transition,
    className: classNames(variantClasses, className),
  };

  return variant == 'h1' ? (
    <motion.h1 id={id} {...attributes}>
      {children}
    </motion.h1>
  ) : variant == 'h2' ? (
    <motion.h2 id={id} {...attributes}>
      {children}
    </motion.h2>
  ) : variant == 'h3' ? (
    <motion.h3 id={id} {...attributes}>
      {children}
    </motion.h3>
  ) : variant == 'h4' ? (
    <motion.h4 id={id} {...attributes}>
      {children}
    </motion.h4>
  ) : variant == 'h5' ? (
    <motion.h5 id={id} {...attributes}>
      {children}
    </motion.h5>
  ) : (
    <motion.h6 id={id} {...attributes}>
      {children}
    </motion.h6>
  );
};

export default Heading;
