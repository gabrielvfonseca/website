import React from 'react';

/* Ui Components */
import { Heading, Paragraph, Badge } from '../ui';

/* Framer Motion */
import { motion } from 'framer-motion';
const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/* Type Props */
interface Props {
  title: string;
  date: string;
  text: string;
  badge?: boolean;
  emoji: string;
}

const Line: React.FC<Props> = ({ title, date, text, badge, emoji }: Props) => (
  <motion.div
    initial={animation.initial}
    animate={animation.animate}
    transition={animation.transition}
    className="mb-10 ml-6"
  >
    <span className="flex absolute text-b -left-3 justify-center items-center w-6 h-6 rounded-th">{emoji}</span>
    {badge ? (
      <div className="flex space-x-4">
        <Heading variant="h3">{title}</Heading>
        <Badge animate={{ state: true, animation: 'fadeInOut' }}>Now</Badge>
      </div>
    ) : (
      <Heading variant="h3">{title}</Heading>
    )}
    <time className="block my-2 text-s font-serif leading-none text-gray">{date}</time>
    <Paragraph size="s">{text}</Paragraph>
  </motion.div>
);

export default Line;
