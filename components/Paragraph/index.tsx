interface Props {
  children: React.ReactNode;
  size?: 'base' | 's' | 'ts' | 't';
  className?: string /* extra styling */;
}
const Paragraph = ({ children, size, className }: Props) => {
  switch (size) {
    case 's':
      return <p className={className ? `text-gray text-s ${className}` : 'text-gray text-s'}>{children}</p>;

    case 'ts':
      return <p className={className ? `text-gray text-ts ${className}` : 'text-gray text-ts'}>{children}</p>;

    case 't':
      return <p className={className ? `text-gray text-t ${className}` : 'text-gray text-t'}>{children}</p>;

    default:
      return <p className={className ? `text-gray ${className}` : 'text-gray'}>{children}</p>;
  }
};

export default Paragraph;
