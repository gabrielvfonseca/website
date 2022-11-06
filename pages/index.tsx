import Head from 'next/head';
import Link from 'next/link';

const SocialTable = () => (
  <div className="flex mt-4 flex-col space-y-2">
    <Link href="/s/github">
      <a className="flex items-center space-x-4 group">
        <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
          Github
        </strong>
        <div className="w-full divide-y-2 divide-primary divide-dashed"></div>
        <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
          Folow
        </span>
      </a>
    </Link>
    <Link href="/s/twitter">
      <a className="flex items-center space-x-4 group">
        <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
          Twitter
        </strong>
        <div className="w-full divide-y-2 divide-primary divide-dashed"></div>
        <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
          Folow
        </span>
      </a>
    </Link>
    <Link href="/s/linkedin">
      <a className="flex items-center space-x-4 group">
        <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
          Linkedin
        </strong>
        <div className="w-full divide-y-2 divide-primary divide-dashed"></div>
        <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
          Folow
        </span>
      </a>
    </Link>
  </div>
);

export default function Index() {
  return (
    <div>
      <Head>
        <title>Gabriel Fonseca</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="#">
        <h1 className="text-3xl mb-2 font-sans font-bold">Hi, I'm Gabriel. I design & create software.</h1>
        <h2>Software developer</h2>
        <p className="text-gray">
          I'm a software engineer, product designer and bioinformatician. I'm particularly interested in the ways
          technology can enhance intuition and creativity.
        </p>

        <form
          id="newsletter"
          className="w-full space-y-2 px-4 py-3 my-6 box-border bg-frogra-black border-0.8 border-solid border-charleston border-opacity-80 rounded-lg"
        >
          <h5 className="sans font-bold">Subscribe to the newsletter</h5>
          <p>Get emails from me about web development, tech, and early access to new articles.</p>
          <div className="relative">
            <input
              type="email"
              className="block p-2 w-full text-s text-whiter bg-transparent rounded-th border-0.8 border-solid border-charleston focus:ring-primary focus:border-primary"
              placeholder="timcook@apple.com"
              required
            />
            <button
              type="submit"
              className="text-black px-3 absolute right-2 top-1 bottom-1 font-medium rounded-base text-s bg-whiter hover:bg-opacity-75 transition ease-in-out delay-75 duration-250"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div id="#blog">
        <h5>From the blog</h5>
      </div>

      <div id="#projects">
        <h5>Featured projects</h5>
      </div>
    </div>
  );
}
