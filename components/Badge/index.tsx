interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'manatee' | 'almond' | 'sunray' | 'ebony' | 'terracotta' | 'cosmos' | 'komet';
  className?: string /* extra styling */;
}
const Badge = ({ children, variant, className }: Props) => {
  switch (variant) {
    case 'manatee':
      return <span className="badge-primary text-s text-center w-20 h-fit rounded-sm">{children}</span>;

    case 'almond':
      return <span className="badge-primary text-center w-20 h-fit rounded-sm">{children}</span>;

    case 'sunray':
      return <span className="badge-primary text-center w-20 h-fit rounded-sm">{children}</span>;

    case 'ebony':
      return <span className="badge-primary text-center w-20 h-fit rounded-sm">{children}</span>;

    case 'terracotta':
      return <span className="badge-primary text-center w-20 h-fit rounded-sm">{children}</span>;

    default:
      return <span className="badge-primary font-serif text-m text-center w-20 h-fit rounded-sm">{children}</span>;
  }
};

export default Badge;
