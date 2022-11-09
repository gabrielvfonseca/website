interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string /* extra styling */;
}

const Heading = ({ variant, children, className }: Props) => {
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={
            className
              ? `text-3xl font-sans leading-snug max-w-lg font-bold ${className}`
              : 'text-3xl font-sans leading-snug max-w-lg font-bold'
          }
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={
            className
              ? `font-sans text-xl leading-tight max-w-lg font-semibold ${className}`
              : 'font-sans text-xl leading-tight max-w-lg font-semibold'
          }
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={
            className
              ? `font-sans text-l leading-tight max-w-lg font-semibold ${className}`
              : 'font-sans text-l leading-tight max-w-lg font-semibold'
          }
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={
            className
              ? `text-base text-white font-sans max-w-lg font-semibold ${className}`
              : 'text-base text-white font-sans max-w-lg font-semibold'
          }
        >
          {children}
        </h4>
      );
    case 'h5':
      return <h5>{children}</h5>;
    default:
      return <h6>{children}</h6>;
  }
};

export default Heading;
