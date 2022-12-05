import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'base' | 'large';
  variant?: 'primary' | 'manatee' | 'almond' | 'sunray' | 'ebony' | 'terracotta' | 'cosmos' | 'komet';
  className?: string /* extra styling */;
  /* framer motion */
  animate?: {
    state: boolean;
    animation?: 'fadeInOut';
    whileHover?: boolean;
    whileTap?: boolean;
    whileInView?: boolean;
  };
  onClick?: () => void /* onclick void */;
}

export const animated = {
  fadeInOut: {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: { duration: 0.4 },
  },

  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  whileInView: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
  },
};

const variants = {
  primary: 'badge-primary text-white',
  manatee: 'bg-manatee border-manatee border-opacity-80 bg-opacity-60',
  almond: 'bg-almond border-almond border-opacity-80 bg-opacity-60',
  sunray: 'bg-sunray border-sunray border-opacity-80 bg-opacity-60',
  ebony: 'bg-ebony border-ebony border-opacity-80 bg-opacity-60',
  terracotta: 'bg-terracotta border-terracotta border-opacity-80 bg-opacity-60',
  cosmos: '',
  komet: '',
};

const sizes = {
  base: 'w-20 text-m',
  small: 'w-14 text-base',
  large: 'w-28 text-l',
};

const Badge: React.FC<Props> = ({ children, variant, size, className, animate, onClick }: Props, ...props: any) => {
  const variantClasses = variants[variant ? variant : 'primary'];
  const sizeClasses = sizes[size ? size : 'base'];

  const atributes = animate?.state && {
    initial: animate.animation && animated.fadeInOut.initial,
    animate: animate.animation && animated.fadeInOut.animate,
    transition: animate.animation && animated.fadeInOut.transition,
    whileHover: animate.whileHover && animated.whileHover,
    whileTap: animate.whileTap && animated.whileTap,
    whileInView: animate.whileInView && animated.whileInView,
  };

  return (
    <motion.span
      {...atributes}
      className={classNames(
        'badge-primary cursor-default font-serif h-fit text-center border-solid border-0.8 rounded-sm hover:opacity-90 transition duration-150 ease-in-out',
        variantClasses,
        sizeClasses,
        className
      )}
      onClick={onClick ? onClick : null}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
