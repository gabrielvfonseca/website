import React, { useState } from 'react';
import classNames from 'classnames';

/* Next */
import Link from 'next/link';

/* Framer Motion */
import { motion } from 'framer-motion';

/* Type Props */
interface Props {
  label: string;
  url: string;
}

const Navigation: React.FC<Props> = ({ label, url }: Props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Link href={url}>
      <motion.a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ transition: { duration: 1 } }}
        className={classNames(
          'text-gray group px-3 py-1 rounded-s cursor-pointer transition ease-in-out delay-75 duration-500',
          isHovered ? 'bg-frogra-black' : ''
        )}
      >
        <span className="bg-clip-text transition ease-in-out delay-50 duration-200">{label}</span>
      </motion.a>
    </Link>
  );
};

export default Navigation;
