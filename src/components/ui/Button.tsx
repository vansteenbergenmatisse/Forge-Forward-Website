import Link from "next/link";

interface Props {
  variant?: 'dark' | 'light' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
  href?: string;
  external?: boolean;
  arrowBadge?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

const variantClasses: Record<string, string> = {
  dark: 'bg-navy text-white shadow-[0_10px_24px_rgba(11,16,32,0.28)] hover:bg-navy-deep',
  light: 'bg-white text-navy hover:bg-ivory-hover',
  outline: 'border border-hairline bg-white text-navy hover:bg-ivory',
  ghost: 'border border-white/25 text-white bg-transparent hover:bg-white/10',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-[22px] py-3 text-sm',
  md: 'px-6 py-[14px] text-[15px]',
};

const base =
  'inline-flex items-center gap-[10px] rounded-full font-semibold whitespace-nowrap flex-shrink-0 transition-[background,transform,box-shadow] duration-150 ease-out active:scale-[0.98] cursor-pointer';

export default function Button({
  variant = 'dark',
  size = 'md',
  href,
  external = false,
  arrowBadge = false,
  className = '',
  type = 'button',
  children,
}: Props) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const arrowBg = variant === 'dark' ? 'bg-white text-navy' : 'bg-navy text-white';
  const badge = arrowBadge ? (
    <span className={`w-5 h-5 rounded-full inline-flex items-center justify-center text-[11px] flex-none ${arrowBg}`}>
      →
    </span>
  ) : null;

  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}{badge}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}{badge}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}{badge}
    </button>
  );
}
