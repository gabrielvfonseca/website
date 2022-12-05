import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cta';
  size?: 'base' | 'small' | 'thin' | 'large';
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean /* disable button */;
  formtarget?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  className?: string /* extra styling */;
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
  primary: '',
  secondary:
    'flex bg-white-gray rounded-th text-reisin-black font-semibold text-base hover:opacity-75 border-1 border-gray hover:border-opacity-80 shadow-sm',

  outline:
    'flex cursor-pointer bg-transparent rounded-th px-4 py-1.5 text-gray text-opacity-90 font-semibold text-base hover:opacity-75 border-1 border-gray border-opacity-30 transition ease-in-out delay-50 duration-200 shadow-sm',
  cta: 'w-full py-1.5 bg-frogra-black text-ts font-semibold font-sans text-center text-whiter text-opacity-70 rounded-th border-0.8 border-solid border-charleston hover:bg-opacity-75 hover:border-gray hover:border-opacity-20',
  dropdown: '',
};

const sizes = {
  base: 'px-4 py-1.5',
  small: 'px-3 py-1',
  large: 'px-5 py-2',
  thin: 'px-2 py-1',
};

const Button: React.FC<Props> = (
  { children, variant, size, type, formtarget, className, disabled, animate, onClick }: Props,
  ...props: any
) => {
  const variantClasses = variants[variant ? variant : 'primary'];
  const sizeClasses = sizes[size ? size : 'base'];

  const attributes = animate?.state && {
    initial: animate.animation && animated.fadeInOut.initial,
    animate: animate.animation && animated.fadeInOut.animate,
    transition: animate.animation && animated.fadeInOut.transition,
    whileHover: animate.whileHover && animated.whileHover,
    whileTap: animate.whileTap && animated.whileTap,
    whileOnView: animate.whileOnView && animated.whileOnView,
    formtarget: type == 'button' && formtarget,
    disabled: disabled,
  };

  return (
    <motion.button
      {...attributes}
      type={type ? type : 'button'}
      className={classNames(
        'cursor-pointer transition ease-in-out delay-50 duration-200',
        variantClasses,
        sizeClasses,
        className
      )}
      onClick={onClick ? onClick : null}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
