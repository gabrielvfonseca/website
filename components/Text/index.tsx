import type { AppProps } from 'next/app';

type Props = {
  text: JSX.Element;
  pageProps: JSX.ElementAttributesProperty;
};

const Text = ({ text, pageProps }: Props) => {
  return (
    <p
      className={`text-base text-right underline-offset-4 antialiased tracking-wide font-normal leading-normal`}
      {...pageProps}
    >
      {text}
    </p>
  );
};

export default Text;
