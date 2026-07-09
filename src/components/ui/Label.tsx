interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Label({ children, className = '' }: Props) {
  return (
    <div className={`text-[13px] font-semibold tracking-[0.08em] uppercase text-red ${className}`}>
      {children}
    </div>
  );
}
