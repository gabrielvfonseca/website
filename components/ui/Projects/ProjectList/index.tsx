import Link from 'next/link';

const example = [{ title: 'The Art of Product', date: "Mar '22", url: '/', role: 'Founder' }];

const ProjectList: React.FC<{ title?: string }> = ({ title }) => (
  <div id="#projects">
    <h4 className="mb-4 text-base text-primary font-sans font-semibold">{title ? title : 'Featured Projects'}</h4>

    <div className="flex flex-col space-y-3">
      {example.map((element, index) => (
        <Link key={index} href={element.url} passHref={true}>
          <a className="flex items-center space-x-4 group hover:opacity-80 transition ease-in-out delay-75 duration-200">
            <strong className="flex-none font-medium text-gray">{element.title}</strong>
            <hr className="w-full my-2 h-1 border-gray border-t border-dashed shrink border-opacity-50" />
            <p className="flex-none font-sans text-gray font-regular text-opacity-60">{element.role}</p>
            <span className="flex-none font-serif">{element.date}</span>
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export default ProjectList;
