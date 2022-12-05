import React from 'react';

/* Next */
import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

/* Framer Motion */
import { motion, AnimatePresence } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Type Props */
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
  title?: string;
  className?: string;
  label?: string /* Picture's description label*/;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/${src}?w=${width}&q=${quality}`;
};

const Picture: React.FC<Props> = ({ src, alt, width, height, quality, label, title, className }: Props) => {
  if (label) {
    return (
      <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
        <span className="space-y-2">
          <Image
            className={`rounded-sm my-10 ${className}`}
            priority
            quality={quality}
            loader={imageLoader}
            src={src}
            alt={alt}
            width={width}
            height={height}
            title={title ? title : ''}
          />
          <span className="font-serif font-regular italic text-left text-t text-gray text-opacity-40">{label}</span>
        </span>
      </motion.div>
    );
  }
  return (
    <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
      <Image
        className={`rounded-sm my-10 ${className}`}
        priority
        quality={quality}
        loader={imageLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
        title={title ? title : ''}
      />
    </motion.div>
  );
};

export default Picture;
