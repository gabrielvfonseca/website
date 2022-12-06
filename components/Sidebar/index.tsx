import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

/* Next */
import Link from 'next/link';
import { useRouter } from 'next/router';

/* Keypress */
import useKeyPress from '../../utils/functions/keyPress';

/* Menu */
import { menu } from './menu';

/* Ui Components */
import { ArrowUpRightIcon, MenuIcon, CloseIcon } from '@iconicicons/react';
import { Button, Heading, Hyperlink } from '../ui';

/* Page Components */
import Container from '../Container';

/* Framer Motion */
import { motion, AnimatePresence } from 'framer-motion';

/* Type Props */
interface Props {
  children: React.ReactNode;
  route: string;
  isHovered?: boolean;
  isMenu?: boolean;
  variant?: 'base' | 'social';
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

const Navigate: React.FC<Props> = ({ children, route, variant, isHovered, isMenu }) => {
  const router = useRouter();

  return (
    <Link href={route}>
      <a
        className={classNames(
          'flex cursor-pointer content-center py-1 px-3 h-8 space-x-3 bg-transparent rounded-sm border-0.8 border-solid hover:text-opacity-80 transition ease-in-out delay-50 duration-200',
          router.pathname === route && !isHovered ? 'border-charleston' : 'border-transparent hover:border-charleston',
          isMenu ? 'w-full' : 'w-32'
        )}
      >
        {variant == 'social' ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex space-x-1 content-center"
          >
            <span className="font-sans text-white text-left text-s font-medium">{children}</span>
            <span className="text-whiter fill-whiter opacity-25 hover:text-primary hover:fill-primary transition ease-in-out delay-75 duration-250">
              <ArrowUpRightIcon width={16} height={16} />
            </span>
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="font-sans text-white text-left text-s font-medium"
          >
            {children}
          </motion.span>
        )}
      </a>
    </Link>
  );
};

const Sidebar = () => {
  const [isHovered, setHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);

  // Next useRouter
  const router = useRouter();

  // Use keyboard shotcut 'esc' to open toast
  useKeyPress(['c'], (e: any) => setOpen(!isOpen));

  // Detect route change
  useEffect(() => {
    const handleComplete = () => {
      setOpen(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <aside className="lg:w-1/6 lg:ml-2 lg:mr-8 w-full z-50 hidden lg:inline xl:inline">
        <Container className="space-y-9 mb-20 px-2">
          <Container className="lg:inline xl:inline">
            <Heading
              variant="h6"
              animate={{ state: true, animation: 'fadeInOut', duration: 0.12 }}
              className="mb-2 ml-3 hidden lg:inline text-gray font-sans font-semibold text-s text-left uppercase opacity-80"
            >
              Browse
            </Heading>
            <motion.nav
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="lg:space-y-1 flex lg:inline justify-between"
            >
              {menu.map((element: any, index: number) => (
                <Navigate key={index} route={element.route} isHovered={isHovered}>
                  {element.label}
                </Navigate>
              ))}
            </motion.nav>
          </Container>
          {/*
        <Container>
          <Heading
            variant="h6"
            animate={{ state: true, animation: 'fadeInOut', duration: 0.12 }}
            className="lg:mb-2 lg:ml-3 mt-1 text-gray font-sans font-semibold text-s text-left uppercase opacity-80"
          >
            Pinned
          </Heading>
        </Container>
        */}
          <Container className="hidden lg:inline">
            <Heading
              variant="h6"
              animate={{ state: true, animation: 'fadeInOut', duration: 0.12 }}
              className="mb-2 ml-3 pt-7 text-gray font-sans font-semibold text-s text-left uppercase opacity-80"
            >
              Elsewhere
            </Heading>
            <Navigate variant="social" route="/s/github">
              Github
            </Navigate>
            <Navigate variant="social" route="/s/twitter">
              Twitter
            </Navigate>
            <Navigate variant="social" route="/s/linkedin">
              Linkedin
            </Navigate>
          </Container>
        </Container>
        {/*}
      <Container className="w-1/6 px-4 fixed mb-4 left-0 bottom-0 text-center">
        <Button variant="cta">Signin</Button>
      </Container>
      */}
      </aside>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(true)}
          >
            <span className="sm:visible lg:hidden rounded-base p-1 bg-reisin-black xl:hidden z-40 absolute cursor-pointer top-8 left-9 hover:opacity-75 text-white fill-white opacity-60 transition ease-in-out delay-75 duration-250">
              <MenuIcon width={26} height={26} />
            </span>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-full drop-shadow-2xl sm:visible lg:hidden xl:hidden z-50 pr-9 pl-2 pt-5 bg-jet-black h-full border-solid border-r-0.8 border-charleston border-opacity-30"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer rounded-base p-1 bg-reisin-black top-8 left-9 text-white fill-white opacity-60 hover:opacity-75 transition ease-in-out delay-75 duration-250"
            >
              <CloseIcon width={26} height={26} />
            </button>
            <div className="w-3/4 fixed top-24 left-8">
              <Container>
                <motion.nav
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="space-y-1"
                >
                  {menu.map((element: any, index: number) => (
                    <Navigate key={index} route={element.route} isHovered={isHovered} isMenu={true}>
                      {element.label}
                    </Navigate>
                  ))}
                </motion.nav>
              </Container>
              <Container>
                <Heading
                  variant="h6"
                  animate={{ state: true, animation: 'fadeInOut', duration: 0.12 }}
                  className="mb-2 ml-3 pt-7 text-gray font-sans font-semibold text-s text-left uppercase opacity-80"
                >
                  Elsewhere
                </Heading>
                <div className="space-y-1 w-3/4">
                  <Navigate variant="social" route="/s/github" isMenu={true}>
                    Github
                  </Navigate>
                  <Navigate variant="social" route="/s/twitter" isMenu={true}>
                    Twitter
                  </Navigate>
                  <Navigate variant="social" route="/s/linkedin" isMenu={true}>
                    Linkedin
                  </Navigate>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
