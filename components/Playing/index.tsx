import React, { useEffect, useState } from 'react';
React.useLayoutEffect = React.useEffect;
import { motion, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';

import { Picture, Hyperlink, Heading, ToastAnimation } from '../ui';
import { CloseIcon } from '@iconicicons/react';

import useKeyPress from '../../utils/functions/keyPress';

interface Props {
  isPlaying: boolean;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  title: string;
}

const Playing = () => {
  const [isVisible, setVisibility] = useState(true);

  const { data } = useSWR('/api/external/spotify/playing', (api: string) => fetch(api).then((res) => res.json()));

  // Use keyboard shotcut 'm' to open toast
  useKeyPress(['m'], (e: any) => setVisibility(!isVisible));

  return (
    <AnimatePresence>
      {data?.isPlaying && isVisible ? (
        <motion.div className="bg-transparent fixed bottom-4 right-8 z-50">
          <motion.div
            layout
            initial={ToastAnimation.initial}
            animate={ToastAnimation.animate}
            exit={ToastAnimation.exit}
          >
            <div className="flex w-fit z-40 py-2 rounded-base bg-frogra-black border-0.8 border-solid border-charleston">
              <span
                onClick={() => setVisibility(false)}
                className="absolute cursor-pointer top-2 right-2 text-whiter fill-whiter opacity-60 hover:fill-primary hover:text-primary transition ease-in-out delay-75 duration-250"
              >
                <CloseIcon width={20} height={20} />
              </span>
              <div>
                <div className="flex space-x-3 pl-4 pr-8">
                  <motion.div className="pt-2">
                    <Picture
                      src={'static/icons/social/spotify.svg'}
                      width={22}
                      height={22}
                      alt="Spotify"
                      quality={100}
                    />
                  </motion.div>
                  <div>
                    <span className="font-serif text-t text-gray opacity-70">Listening to:</span>
                    <Hyperlink
                      href={data?.songUrl ? data?.songUrl : '#'}
                      target="_blank"
                      className="font-semibold text-s hover:text-primary transition ease-in-out delay-75 duration-250"
                    >
                      <Heading variant="h6">{data?.title}</Heading>
                    </Hyperlink>
                    <span className="flex space-x-1 text-tss m-0 font-serif font-medium text-gray">
                      <span>by</span>
                      <span className="text-opacity-90">{data?.artist}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Playing;
