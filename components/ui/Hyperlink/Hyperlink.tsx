import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  variant?: 'base' | 'underline';
  className?: string /* extra styling */;
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';

  /* framer motion */
  animate?: {
    state: boolean;
    animation?: 'fadeInOut';
    whileHover?: boolean;
    whileTap?: boolean;
    whileOnView?: boolean;
  };
  onClick?: () => void /* onclick void */;
}

export const animated = {
  fadeInOut: {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: { duration: 0.4 },
  },

  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  whileOnView: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
  },
};

const variants = {
  base: 'text-m text-opacity-80 text-gray hover:text-primary',
  underline:
    'text-m text-opacity-80 text-gray hover:underline hover:decoration-terracotta Hover:decoration-solid hover:decoration-0.8 hover:underline-offset-4 hover:text-primary',
};

const Hyperlink: React.FC<Props> = ({ children, variant, href, target, animate, className, onClick }: Props) => {
  const variantClasses = variants[variant ? variant : 'base'];

  const attributes = animate?.state && {
    initial: animate.animation && animated.fadeInOut.initial,
    animate: animate.animation && animated.fadeInOut.animate,
    transition: animate.animation && animated.fadeInOut.transition,
    whileOnView: animate.whileOnView && animated.whileOnView,
  };

  return (
    <motion.span {...attributes}>
      <Link href={href} passHref={true} target={target} onClick={onClick}>
        <span
          className={classNames(
            'cursor-pointer transition-all ease-out delay-75 duration-250',
            variantClasses,
            className
          )}
        >
          {children}
        </span>
      </Link>
    </motion.span>
  );
};

export default Hyperlink;
