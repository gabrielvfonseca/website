import Link from 'next/link';

const SocialList: React.FC<{ title?: string }> = ({ title }) => (
  <div id="social">
    <h4 className="mb-4 text-base text-primary font-sans font-semibold">{title ? title : 'Elsewhere'}</h4>

    <div className="flex mt-4 flex-col space-y-2">
      <Link href="/s/github">
        <a className="flex items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
          <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
            Github
          </strong>
          <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
          <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
            Folow
          </span>
        </a>
      </Link>
      <Link href="/s/twitter">
        <a className="flex items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
          <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
            Twitter
          </strong>
          <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
          <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
            Folow
          </span>
        </a>
      </Link>
      <Link href="/s/linkedin">
        <a className="flex items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
          <strong className="flex-none font-medium text-gray group-hover:text-primary transition ease-in-out delay-75 duration-200">
            Linkedin
          </strong>
          <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
          <span className="flex-none text-white-gray group-hover:opacity-75 transition ease-in-out delay-75 duration-200">
            Folow
          </span>
        </a>
      </Link>
    </div>
  </div>
);

export default SocialList;
