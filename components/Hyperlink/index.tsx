import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  variant?: 'default' | 'underline' | 'wrapped';
  className?: string /* extra styling */;
  onClick?: any;
  href: any;
  target?: '_blank' | '_parent' | '_self' | '_top';
  download?: boolean;
  hrefLang?: string | 'pt' | 'en';
  rel?:
    | 'alternate'
    | 'author'
    | 'bookmark'
    | 'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noreferrer'
    | 'noopener'
    | 'prev'
    | 'search'
    | 'tag';

  as?: string /* Optional decorator for the path that will be shown in the browser URL bar */;
  scrollToTop?: boolean /* Scroll to the top of the page after a navigation */;
}

const HyperLink = ({ children, variant, href, target, download, hrefLang, rel, as, scrollToTop, className }: Props) => {
  switch (variant) {
    case 'underline':
      return (
        <Link
          href={href}
          passHref={true}
          scroll={scrollToTop}
          target={target ? target : '_self'}
          download={download}
          hrefLang={hrefLang ? hrefLang : undefined}
          rel={rel ? rel : undefined}
          as={as ? as : undefined}
        >
          <a className="text-m cursor-pointer text-opacity-80 text-gray hover:underline hover:decoration-terracotta Hover:decoration-solid hover:decoration-0.8 hover:underline-offset-4 hover:text-primary transition-all ease-out delay-75 duration-250">
            {children}
          </a>
        </Link>
      );

    case 'wrapped':
      return (
        <Link
          href={href}
          passHref={true}
          scroll={scrollToTop}
          target={target ? target : '_self'}
          download={download}
          hrefLang={hrefLang ? hrefLang : undefined}
          rel={rel ? rel : undefined}
          as={as ? as : undefined}
        >
          <a className={className}>{children}</a>
        </Link>
      );

    default:
      return (
        <Link
          href={href}
          passHref={true}
          scroll={scrollToTop}
          target={target ? target : '_self'}
          download={download}
          hrefLang={hrefLang ? hrefLang : undefined}
          rel={rel ? rel : undefined}
          as={as ? as : undefined}
        >
          <a
            className={
              className
                ? className
                : 'text-m cursor-pointer text-opacity-80 text-gray hover:text-primary transition-all ease-out delay-75 duration-250'
            }
          >
            {children}
          </a>
        </Link>
      );
  }
};

export default HyperLink;
