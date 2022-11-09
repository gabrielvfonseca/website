import React from 'react';
import { ArrowUpRightIcon } from '@iconicicons/react';

import { Hyperlink } from '../../index';

const Footer: React.FC<{ userIsLoged?: boolean }> = ({ userIsLoged }) => {
  return (
    <div className="w-1/6 px-4 fixed mb-4 left-0 bottom-0 text-center">
      <button className="w-full py-1.5 bg-frogra-black text-ts font-semibold font-sans text-center text-whiter text-opacity-70 rounded-th border-0.8 border-solid border-charleston hover:bg-opacity-75 hover:border-gray hover:border-opacity-20 transition ease-in-out delay-50 duration-200">
        Signin
      </button>
    </div>
  );
};

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h6 className="mb-2 ml-3 text-gray font-sans font-semibold text-s text-left uppercase opacity-80">{children}</h6>
);

const NavigationLink: React.FC<{ label: string; route: string }> = ({ label, route }) => {
  return (
    <Hyperlink
      variant="wrapped"
      href={route}
      prefetch={true}
      className="flex py-1 px-3 h-8 w-full space-x-3 content-center bg-transparent rounded-sm border-0.8 border-solid border-transparent hover:text-opacity-80 hover:border-charleston transition ease-in-out delay-50 duration-200"
      scrollToTop
    >
      <span className="font-sans text-white text-left text-s font-medium">{label}</span>
    </Hyperlink>
  );
};

const NavigationSocialLink: React.FC<{ label: string; route: string }> = ({ label, route }) => {
  return (
    <Hyperlink
      href={route}
      prefetch={true}
      target="_blank"
      className="flex py-1 px-3 h-8 w-full space-x-1 content-center bg-transparent rounded-sm border-0.8 border-solid border-transparent hover:text-opacity-80 hover:border-charleston transition ease-in-out delay-50 duration-200"
    >
      <span className="font-sans text-white text-left text-s font-medium">{label}</span>
      <span className="text-whiter fill-whiter opacity-25 hover:text-primary hover:fill-primary transition ease-in-out delay-75 duration-250">
        <ArrowUpRightIcon width={16} height={16} />
      </span>
    </Hyperlink>
  );
};

const Sidebar = () => {
  const navMenu = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Blog', route: '/blog' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Interests', route: '/interests' },
    { label: 'Snippets', route: '/snippets' },
    { label: 'Tools', route: '/tools' },
    { label: 'Ask', route: '/ask' },
  ];

  return (
    <aside className="w-1/6 ml-2 mr-8">
      <div className="space-y-5 pt-4">
        <div>
          <Heading>Browse</Heading>
          <nav className="space-y-1">
            {navMenu.map((e, i) => (
              <NavigationLink key={i} label={e.label} route={e.route} />
            ))}
          </nav>
        </div>
        <div>
          <Heading>Pinned</Heading>
        </div>
        <div>
          <Heading>Elsewhere</Heading>
          <NavigationSocialLink label="Github" route="/s/github" />
          <NavigationSocialLink label="Twitter" route="/s/twitter" />
          <NavigationSocialLink label="Linkedin" route="/s/linkedin" />
        </div>
      </div>
      <Footer />
    </aside>
  );
};

export default Sidebar;
