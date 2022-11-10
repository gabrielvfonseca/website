import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Picture, Hyperlink, Heading } from '../../index';
import { CloseIcon } from '@iconicicons/react';

import useKeyPress from '../../../utils/functions/keyPress';
import { Animation } from '../../Toast';

interface Props {
  isPlaying: boolean;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  title: string;
}

const Playing = () => {
  const [data, setData] = useState<Props>();
  const [isVisible, setVisibility] = useState(true);
  const [isHovered, setHovered] = useState(false);

  const fetchData = () => {
    return fetch('http://localhost:3000/api/external/spotify/playing')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error: Spotify playing fetch');
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Use keyboard shotcut 'm' to open toast
  useKeyPress(['m'], (e: any) => setVisibility(!isVisible));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      {data?.isPlaying && isVisible ? (
        <motion.div className="bg-transparent fixed bottom-4 right-8 z-50">
          <motion.div layout initial={Animation.initial} animate={Animation.animate} exit={Animation.exit}>
            <div className="flex w-fit z-40 py-2 rounded-base bg-frogra-black border-0.8 border-solid border-charleston">
              <span
                onClick={() => setVisibility(false)}
                className="absolute cursor-pointer top-2 right-2 text-whiter fill-whiter opacity-60 hover:fill-primary hover:text-primary transition ease-in-out delay-75 duration-250"
              >
                <CloseIcon width={20} height={20} />
              </span>
              <div>
                <div className="flex space-x-3 pl-4 pr-8">
                  <motion.span
                    className="pt-2"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Picture
                      src={'static/icons/social/spotify.svg'}
                      width={22}
                      height={22}
                      alt="Spotify"
                      quality={100}
                    />
                  </motion.span>
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
