import Link from 'next/link';

import { Heading, Paragraph, Badge } from '../../index';
import { BriefcaseIcon } from '@iconicicons/react';

interface Props {
  heading: string;
  time: string;
  paragraph: string;
  badge: {
    label: string;
  };
}

const Event = ({ heading, time, paragraph, badge }: Props) => (
  <li className="mb-10 ml-6">
    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-th">
      <BriefcaseIcon width={22} height={22} />
    </span>
    {badge ? (
      <div className="flex space-x-4">
        <Heading variant="h3">{heading}</Heading>
        <Badge>{badge.label}</Badge>
      </div>
    ) : (
      <Heading variant="h3">{heading}</Heading>
    )}
    <time className="block my-2 text-s font-serif leading-none text-gray">{time}</time>
    <Paragraph size="s">{paragraph}</Paragraph>
  </li>
);

const Timeline = () => (
  <div id="timeline">
    <ol className="relative">
      <Event
        heading="Flowbite Application UI v2.0.0"
        time="September 22, 2022"
        paragraph="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
        E-commerce &amp; Marketing pages."
        badge={{ label: 'Hello' }}
      />
    </ol>
  </div>
);

export default Timeline;
