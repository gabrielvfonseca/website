import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@iconicicons/react';

interface sidebarProps {
  userIsLoged?: boolean; // true or false
}

interface titleProps {
  label: string; // h6 text
}

interface linkRouteProps {
  label: string;
  route: string;
  icon?: JSX.Element;
}

const NavigationFooter = ({ userIsLoged }: sidebarProps) => {
  return (
    <div className="w-1/6 px-4 fixed mb-4 left-0 bottom-0 text-center">
      <button className="w-full py-1.5 bg-frogra-black text-ts font-semibold font-sans text-center text-whiter text-opacity-70 rounded-th border-0.8 border-solid border-charleston hover:bg-opacity-75 hover:border-gray hover:border-opacity-20 transition ease-in-out delay-50 duration-200">
        Signin
      </button>
    </div>
  );
};

const NavigationHeading = ({ label }: titleProps) => (
  <h6 className="mb-2 ml-3 text-gray font-sans font-semibold text-s text-left uppercase opacity-80">{label}</h6>
);

const NavigationLink = ({ label, route, icon }: linkRouteProps) => {
  return (
    <Link href={route} prefetch={true} passHref={true}>
      <a className="flex py-1 px-3 h-8 w-full space-x-3 content-center bg-transparent rounded-sm border-0.8 border-solid border-transparent hover:text-opacity-80 hover:border-charleston transition ease-in-out delay-50 duration-200">
        {/*<span className="text-whiter fill-whiter opacity-70">{icon}</span>*/}
        <span className="font-sans text-white text-left text-s font-medium">{label}</span>
      </a>
    </Link>
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
          <NavigationHeading label="Browse" />
          <nav className="space-y-1">
            {navMenu.map((e, i) => (
              <NavigationLink key={i} label={e.label} route={e.route} />
            ))}
          </nav>
        </div>
        <div>
          <NavigationHeading label="Pinned" />
        </div>
        <div>
          <NavigationHeading label="Elsewhere" />
          <NavigationLink
            label="Github"
            route="/s/github"
            icon={<Image src="/static/icons/social/github.svg" width={21} height={21} alt="Github" />}
          />
          <NavigationLink
            label="Twitter"
            route="/s/twitter"
            icon={<Image src="/static/icons/social/twitter.svg" width={21} height={21} alt="Twitter" />}
          />
          <NavigationLink
            label="Linkedin"
            route="/s/linkedin"
            icon={<Image src="/static/icons/social/linkedin.svg" width={21} height={21} alt="Linkedin" />}
          />
        </div>
      </div>
      <NavigationFooter />
    </aside>
  );
};

export default Sidebar;
